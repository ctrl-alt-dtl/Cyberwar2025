angular.module('CyberWar')
.controller('ReportsController', function($scope, GameState, GameUtil, reports) {
  sortReports();

  // ----------------------------------------------------------------------------
  $scope.ok = function () {
    modalInstance.close();
  };

  // ----------------------------------------------------------------------------
  function sortReports() {
    $scope.attackReports = [];
    $scope.defendReports = [];
    $scope.expelReports = [];
    $scope.expelledReports = [];
    $scope.implantReports = [];
    $scope.scanReports = [];
    $scope.secureReports = [];

    reports.forEach(report => {
      switch (report.action) {
        // Acquire and Manipulate attacks stack into a single action
        case ActionType.ACQUIRE:
        case ActionType.MANIPULATE:
          if (!isAttackTarget(report)) {
            addStackableReport($scope.attackReports, report, getAttackReportObject, 'attackStrength');
          }
          else {
            $scope.defendReports.push(getDefendReportObject(report));
          }
          break;
        // Deny and Exploit attacks don't stack
        case ActionType.DENY:
        case ActionType.EXPLOIT:
          if (!isAttackTarget(report)) {
            $scope.attackReports.push(getAttackReportObject(report));
          }
          else {
            $scope.defendReports.push(getDefendReportObject(report));
          }
          break;
        case ActionType.EXPEL:
          if (!isAttackTarget(report)) {
            $scope.expelReports.push(getExpelReportObject(report));
          }
          else {
            $scope.expelledReports.push(getExpelReportObject(report));
          }
          break;
        case ActionType.IMPLANT:
          $scope.implantReports.push(getImplantReportObject(report));
          break;
        case ActionType.ANALYZE:
        case ActionType.SCAN:
          $scope.scanReports.push(getScanReportObject(report));
          break;
        case ActionType.SECURE:
          addStackableReport($scope.secureReports, report, getSecureReportObject, 'amount');
          break;
      }
    });
  }

  // ----------------------------------------------------------------------------
  function isAttackTarget(report) {
    return GameState.currentPlayerData.name == report.params.attackedPlayer;
  }

  // ----------------------------------------------------------------------------
  function addStackableReport(reportList, report, getReportObjectCB, stackableProperty) {
    // If we already have a similar report, then just modify it, otherwise add a new one
    var previousReport = getPreviousReport(reportList, report);
    if (!previousReport) {
      reportList.push(getReportObjectCB(report));
    }
    else {
      previousReport[stackableProperty] += report.params[stackableProperty];
    }
  }

  // ----------------------------------------------------------------------------
  // An attack report has the following properties:
  // type - What type of attack it was (ACQUIRE, MANIPULATE, DENY, or EXPLOIT)
  // location - The node location the action was targeting
  // attackStrength - How strong the attacking nodes were when calculating the result
  // defenderStrength - How strong the defending node was (only shows if the node was scanned the turn before attacking)
  // success - Whether the attack was successful or not
  function getAttackReportObject(report) {
    return {
      type: report.action,
      location: report.location,
      attackStrength: report.params.attackStrength,
      defenderStrength: report.params.defenderStrength,
      success: report.params.success
    };
  }

  // ----------------------------------------------------------------------------
  // A defend report (when the current player was the target of a successful attack) has the following properties:
  // type - What type of attack it was (ACQUIRE or DENY)
  // location - The node location the action was targeting
  // defenderStrength - How strong the defending node was
  function getDefendReportObject(report) {
    return {
      type: report.action,
      location: report.location,
      defenderStrength: report.params.defenderStrength
    };
  }

  // ----------------------------------------------------------------------------
  // A report for an EXPEL action has the following properties:
  // location - The node location the action was targeting
  // removedLinks - The list of links that were removed (only shows if the node was scanned the turn before expelling)
  // -- removedLinks objects have the following properties:
  // -- owner - The previous owner of the exploit link
  // -- numRemoved - The number of exploit links that player had on this node
  function getExpelReportObject(report) {
    return {
      location: report.location,
      removedLinks: report.params ? report.params.removedLinks : undefined
    };
  }

  // ----------------------------------------------------------------------------
  // A report for an IMPLANT action has the following properties:
  // location - The node location the action was targeting
  function getImplantReportObject(report) {
    return {
      location: report.location,
    };
  }

  // ----------------------------------------------------------------------------
  // A report for a SCAN/ANALYZE action has the following properties:
  // location - The node location the action was targeting
  // owner - The owner of the scanned node
  // manipulatedOwner - The displayed owner of the scanned node when not scanned/owned by the current player
  // strength - The node's attack/defense strength
  // exploitLinks - The list of exploit links discovered on the node
  // -- exploitLinks objects have the following properties:
  // -- owner - The owner of the exploit link
  // -- link - The two nodes linked together from link.nodeA to link.nodeB
  function getScanReportObject(report) {
    return {
      location: report.location,
      owner: report.params.owner,
      manipulatedOwner: report.params.manipulatedOwner,
      strength: report.params.strength,
      exploitLinks: report.params.exploitLinksFound,
    };
  }

  // ----------------------------------------------------------------------------
  function getSecureReportObject(report) {
    return {
      location: report.location,
      amount: report.params.amount
    };
  }

  // ----------------------------------------------------------------------------
  function getPreviousReport(reports, otherReport) {
    // Are these reports the same type?
    return reports.find(report => report.type == otherReport.type &&
      // Are these reports at the same location?
      GameUtil.isSameLocation(report.location, otherReport.location) &&
      // Attacked player must either both not exist or both be the same
      report.attackedPlayer == otherReport.attackedPlayer);
  }
});
