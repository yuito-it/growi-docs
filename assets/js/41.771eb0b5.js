(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{405:function(e,t,n){"use strict";n.r(t);var i=n(48),a=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ldap-keycloak-group-synchronization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ldap-keycloak-group-synchronization","aria-hidden":"true"}},[e._v("#")]),e._v(" LDAP/Keycloak Group Synchronization")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("GROWI v6.3 now includes a feature introduced to import users and user groups data managed in external systems into GROWI."),n("br"),e._v("\nYou can choose to import from an LDAP server or Keycloak. Keycloak integrated with LDAP is also covered."),n("br"),e._v("\nThis feature can also track and synchronize changes to users and user groups once imported.")]),e._v(" "),n("ul",[n("li",[e._v("Imports and synchronization can be performed through the administration page ("),n("code",[e._v("/admin")]),e._v(").")]),e._v(" "),n("li",[e._v("For external specifications, refer to "),n("a",{attrs:{href:"https://dev.growi.org/646d5637019e02272a42cf86",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dev Wiki | /Documentation/External-Specifications/LDAP-Group-Synchronization"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"required-settings-in-growi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#required-settings-in-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Required Settings in GROWI")]),e._v(" "),n("ul",[n("li",[e._v("Access the group management page ("),n("code",[e._v("/admin/user-groups")]),e._v(") in the GROWI administration page\nand select the tab for the external group (LDAP or Keycloak) you want to create.")]),e._v(" "),n("li",[e._v("To use the external group synchronization feature, you need to set up authentication mechanisms for LDAP/Keycloak in advance.")])]),e._v(" "),n("h2",{attrs:{id:"authentication-mechanism-settings-ldap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-mechanism-settings-ldap","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication Mechanism Settings (LDAP)")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Access the Security Settings page ("),n("code",[e._v("/admin/security")]),e._v(') on the GROWI administration page,\nand configure settings under the "LDAP" tab in the "Authentication Mechanism Settings."')]),e._v(" "),n("ul",[n("li",[e._v("For details on the settings and procedures, see "),n("a",{attrs:{href:"https://docs.growi.org/en/admin-guide/management-cookbook/ldap.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("LDAP Integration"),n("OutboundLink")],1),e._v(".")])])]),e._v(" "),n("li",[n("p",[e._v("Access the group management page ("),n("code",[e._v("/admin/user-groups")]),e._v(') on the GROWI administration page, and configure settings under the "LDAP" tab in the "External Group Management".')]),e._v(" "),n("p",[e._v("The required input fields are as follows:")]),e._v(" "),n("ul",[n("li",[e._v("Group Search Base DN")]),e._v(" "),n("li",[e._v("Membership Attribute")]),e._v(" "),n("li",[e._v("Child Groups Attribute")])])])]),e._v(" "),n("h2",{attrs:{id:"authentication-mechanism-settings-keycloak"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-mechanism-settings-keycloak","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication Mechanism Settings (Keycloak)")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Access the security settings page ("),n("code",[e._v("/admin/security")]),e._v(') on the GROWI administration page,\nand configure settings under the "OIDC" tab in the "Authentication Mechanism Settings".')]),e._v(" "),n("p",[e._v("The required input fields are as follows:")]),e._v(" "),n("ul",[n("li",[e._v("Provider Name")]),e._v(" "),n("li",[e._v("Issuer Host")]),e._v(" "),n("li",[e._v("Client ID")]),e._v(" "),n("li",[e._v("Client Secret")]),e._v(" "),n("li",[e._v("Authorization Endpoint")]),e._v(" "),n("li",[e._v("Token Endpoint")]),e._v(" "),n("li",[e._v("Revocation Endpoint")]),e._v(" "),n("li",[e._v("Introspection Endpoint")]),e._v(" "),n("li",[e._v("UserInfo Endpoint")]),e._v(" "),n("li",[e._v("EndSession Endpoint")]),e._v(" "),n("li",[e._v("Registration Endpoint")]),e._v(" "),n("li",[e._v("Attribute Mapping\n"),n("ul",[n("li",[e._v("Identifier")]),e._v(" "),n("li",[e._v("username")]),e._v(" "),n("li",[e._v("Email")])])])])]),e._v(" "),n("li",[n("p",[e._v("Access the group management page ("),n("code",[e._v("/admin/user-groups")]),e._v(') on the GROWI administration page,\nand configure settings under the "Keycloak" tab in the "External Group Management".')]),e._v(" "),n("p",[e._v("The required input fields are as follows:")]),e._v(" "),n("ul",[n("li",[e._v("Host")]),e._v(" "),n("li",[e._v("Group Realm")]),e._v(" "),n("li",[e._v("Realm of client used to request to Admin API")]),e._v(" "),n("li",[e._v("Client ID")]),e._v(" "),n("li",[e._v("Client Secret")]),e._v(" "),n("li",[e._v("Auto Generate User on Sync")]),e._v(" "),n("li",[e._v("Description")])])])]),e._v(" "),n("h2",{attrs:{id:"running-synchronization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-synchronization","aria-hidden":"true"}},[e._v("#")]),e._v(" Running Synchronization")]),e._v(" "),n("ul",[n("li",[e._v('Click "Sync" in the synchronization execution section and confirm that the group has been added to the "Group list" in "External Group Management".\n'),n("ul",[n("li",[e._v("The name, description, users belonging to the added external group, child groups, and creation date will be displayed.")])])]),e._v(" "),n("li",[e._v("In subsequent synchronizations, if there are changes in the data on the LDAP/Keycloak side, it will be synchronized with the changed content.\n"),n("ul",[n("li",[e._v('However, if "Preserve Deleted LDAP/Keycloak Groups" is turned on, deleted groups will remain in GROWI.')])])]),e._v(" "),n("li",[e._v("(TBD) Points to note when synchronizing large groups.")])])])},[],!1,null,null,null);t.default=a.exports}}]);