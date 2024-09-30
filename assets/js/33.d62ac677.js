(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(t,e,a){"use strict";a.r(e);var s=a(48),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aws-s3-bucket-setting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-s3-bucket-setting","aria-hidden":"true"}},[t._v("#")]),t._v(" AWS S3 Bucket Setting")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),a("li",[a("a",{attrs:{href:"#how-to-configure"}},[t._v("How to Configure")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This chapter introduces how to integrate AWS S3 Bucket with GROWI.")]),t._v(" "),a("p",[t._v("This setting makes uploading attachment files and profile images to AWS S3 Bucket available. If SMTP settings are not completed, emails will be sent via SES. You need to verify From email address and production settings.")]),t._v(" "),a("h2",{attrs:{id:"how-to-configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure","aria-hidden":"true"}},[t._v("#")]),t._v(" How to Configure")]),t._v(" "),a("h3",{attrs:{id:"get-aws-account-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-aws-account-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Get AWS Account Information")]),t._v(" "),a("ol",[a("li",[t._v("Sign-in "),a("a",{attrs:{href:"https://aws.amazon.com/console/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS Management Console"),a("OutboundLink")],1),t._v(", and click "),a("a",{attrs:{href:"https://console.aws.amazon.com/iam/home?#/security_credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("My Security Credentials"),a("OutboundLink")],1),t._v(" in drop-down list of account information on the left side of the top bar.")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/images/aws-setting-1.png"),alt:"aws-setting-1"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v('In the "Access keys (access key ID and secret access key)" tab, create a new access key.')]),t._v(" "),a("li",[t._v('In the "Account identifiers" tab, check your Canonical User ID.')])]),t._v(" "),a("h3",{attrs:{id:"get-aws-s3-bucket-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-aws-s3-bucket-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Get AWS S3 Bucket Information")]),t._v(" "),a("ol",[a("li",[t._v("Access to "),a("a",{attrs:{href:"https://s3.console.aws.amazon.com/s3",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS S3 dashboard"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Check the region and name of S3 Bucket that you will register with GROWI.")]),t._v(" "),a("li",[t._v("Open Permissions page of S3 Bucket.")]),t._v(" "),a("li",[t._v('In the "Block public access" tab, click Edit button and uncheck the "Block public access to buckets and objects granted through new access control lists (ACLs)" checkbox. Then, save changes.')]),t._v(" "),a("li",[t._v('In the "Access Control List" tab, if the Canonical User ID that you checked in Step 3 of '),a("a",{attrs:{href:"#get-aws-account-information"}},[t._v("Get AWS Account Information")]),t._v(' doesn\'t match the Canonical ID added to the "Acceess for bucket owner" table, add the ID to the "Access for other AWS accounts" list with full permissions.')])]),t._v(" "),a("h3",{attrs:{id:"register-your-bucket-with-growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-your-bucket-with-growi","aria-hidden":"true"}},[t._v("#")]),t._v(" Register Your Bucket With GROWI")]),t._v(" "),a("ol",[a("li",[t._v("In App settings page ("),a("code",[t._v("/admin/app")]),t._v("), Input information of S3 Bucket that you checked in Step 2 of "),a("a",{attrs:{href:"#get-aws-s3-bucket-information"}},[t._v("Get AWS S3 Bucket Information")]),t._v(".")]),t._v(" "),a("li",[t._v("If you use a S3-compatible storage service like MinIO, input the endpoint URL in the Custom Endpoint form. If this form is empty, GROWI uses Amazon S3 by default.")])])])},[],!1,null,null,null);e.default=o.exports}}]);