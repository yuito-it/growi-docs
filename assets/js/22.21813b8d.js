(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(e,t,a){"use strict";a.r(t);var r=a(48),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-backup-restore","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB Backup & Restore")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#using-aws-s3"}},[e._v("Using AWS S3")])]),a("li",[a("a",{attrs:{href:"#using-google-cloud-platform"}},[e._v("Using Google Cloud Platform")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This chapter introduces how to backup and restore GROWI data using "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("Docker")]),e._v(" "),a("li",[e._v("AWS S3 bucket to upload backup files\n"),a("ul",[a("li",[e._v("Access key and secret key for a user authorized to access S3 bucket.")])])])]),e._v(" "),a("h2",{attrs:{id:"using-aws-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-aws-s3","aria-hidden":"true"}},[e._v("#")]),e._v(" Using AWS S3")]),e._v(" "),a("h3",{attrs:{id:"before-you-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Before You Start")]),e._v(" "),a("p",[e._v("To backup/restore MongoDBs, "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(" creates a temporary container that executes shell scripts. In order to access the MongoDB server from the temporary container, add the docker command option below.")]),e._v(" "),a("h4",{attrs:{id:"when-mongodb-is-running-as-a-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-mongodb-is-running-as-a-docker-container","aria-hidden":"true"}},[e._v("#")]),e._v(" When MongoDB Is Running as a Docker Container")]),e._v(" "),a("p",[e._v("Run a command to find out the container name, and add an option "),a("code",[e._v("--link ${container}:mongo")]),e._v(" with the container name ("),a("code",[e._v("${container}")]),e._v(").\n")]),e._v(" "),a("h5",{attrs:{id:"e-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#e-g","aria-hidden":"true"}},[e._v("#")]),e._v(" e.g.")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("docker ps")]),e._v(" to find out the container name.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vagrant@ubuntu-xenial:/etc/docker-compose$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\nCONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS                   PORTS               NAMES\n21a10f879cba        mongo                           "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint.s…"')]),e._v("   11 minutes ago      Up 11 minutes            27017/tcp           serene_swartz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("man")]),e._v("\n")])])]),a("p",[e._v("The command above shows the container name is "),a("code",[e._v("serene_swartzman")]),e._v(", therefore the option is "),a("code",[e._v("--link serene_swartz:mongo")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"when-mongodb-is-not-running-as-a-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-mongodb-is-not-running-as-a-docker-container","aria-hidden":"true"}},[e._v("#")]),e._v(" When MongoDB Is NOT Running as a Docker Container")]),e._v(" "),a("h5",{attrs:{id:"when-docker-host-is-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-docker-host-is-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" When Docker Host is Linux")]),e._v(" "),a("p",[e._v("Add "),a("code",[e._v("--network host")]),e._v(" to use the same network with the host.")]),e._v(" "),a("h5",{attrs:{id:"for-docker-for-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-docker-for-mac","aria-hidden":"true"}},[e._v("#")]),e._v(" For Docker for Mac")]),e._v(" "),a("ul",[a("li",[e._v("(TBD: Looking for a contributor)")])]),e._v(" "),a("h5",{attrs:{id:"for-docker-for-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-docker-for-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" For Docker for Windows")]),e._v(" "),a("ul",[a("li",[e._v("(TBD: Looking for a contributor)")])]),e._v(" "),a("h3",{attrs:{id:"how-to-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-backup","aria-hidden":"true"}},[e._v("#")]),e._v(" How to Backup")]),e._v(" "),a("ol",[a("li",[e._v("Run "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(" container with ("),a("code",[e._v("--rm")]),e._v(") flag."),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run --rm \\\n  -e MONGODB_HOST"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target MongoDB Host"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_ACCESS_KEY_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Access Key ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_SECRET_ACCESS_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Secret Access Key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_BUCKET_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target S3 Bucket URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s3://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  weseek/mongodb-awesome-backup\n")])])])]),e._v(" "),a("li",[e._v("The command creates a backup for all databases in the target MongoDB server, and upload it as "),a("code",[e._v("backup-YYYYMMdd.tar.bz2")]),e._v(" in the S3 bucket.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(" for more options.")])]),e._v(" "),a("h3",{attrs:{id:"how-to-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-restore","aria-hidden":"true"}},[e._v("#")]),e._v(" How to Restore")]),e._v(" "),a("ol",[a("li",[e._v("Run "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(" container with ("),a("code",[e._v("--rm")]),e._v(") flag."),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run --rm \\\n  -e MONGODB_HOST"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target MongoDB Host"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_ACCESS_KEY_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Access Key ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e AWS_SECRET_ACCESS_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Your IAM Secret Access Key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_BUCKET_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Target S3 Bucket URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s3://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\\n  -e S3_TARGET_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("backup-YYYYMMdd.tar.bz2 \\\n  weseek/mongodb-awesome-backup restore\n")])])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("The command restores the specified file ("),a("code",[e._v("backup-YYYYMMdd.tar.bz2")]),e._v(" in the example above ) in the S3 bucket.\n")]),e._v(" "),a("li",[e._v("Restart GROWI.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/mongodb-awesome-backup"),a("OutboundLink")],1),e._v(" for more options.")])]),e._v(" "),a("h2",{attrs:{id:"using-google-cloud-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-google-cloud-platform","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Google Cloud Platform")]),e._v(" "),a("ul",[a("li",[e._v("(TBD: Looking for a contributor)")])])])},[],!1,null,null,null);t.default=o.exports}}]);