/*******************************************************************************
 * An enum representing possible chat requests
 ******************************************************************************/
this.ActionType = {
  SECURE: "Secure", // Strengthen owned server node
  EXPEL: "Expel", // Remove opponent exploit links from node
  ANALYZE: "Analyze", // Scan entire network
  ACQUIRE: "Acquire", // Take over server node
  MANIPULATE: "Manipulate", // Acquire a node disguised as another player
  DENY: "Deny", // Destroy server node
  SCAN: "Scan", // Check node for links and node strength
  EXPLOIT: "Exploit", // Insert a hidden connection to a node
  IMPLANT: "Implant", // Lower server strength to 1 for a turn
}
