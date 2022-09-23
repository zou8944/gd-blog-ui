<script setup>
    import * as marked from 'marked'
    import { shallowRef } from 'vue'
    import hljs from 'highlight.js'
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });
    console.log(marked)
    const compileHtml = shallowRef();
    compileHtml.value = marked.parse('前面介绍过Kubernetes的结构组成，其中API Server用于与外界的交互，我们常用的命令行工具kubectl、UI工具lens、云服务商提供的WebUI，最终都是通过Restfule API的形式，走HTTP协议，到达API Server。此时就带来权限控制问题。\n\n<!-- more -->\n\n<img src=\"https://gdz.oss-cn-shenzhen.aliyuncs.com/local/image-20211203153658776.png\" alt=\"image-20211203153658776\" style=\"zoom:80%;\" />\n\n如上图，对来自外部的请求，Api Server会经过三个组件\n\n- Authentication：认证，验证用户的合法性，并从中提取出用户信息，如用户名、组等\n- Authorization：鉴权，鉴定该用户是否有权限访问指定资源\n- Admission：准入，它可以修改或拒绝请求\n\n## 认证\n\n与用户相关的概念，有用户、组、ServiceAccount，但只有ServiceAccount才在Kubernetes中以资源的形式存在，用户、组并不会以资源的形式存在，它们只是一个字符串，在使用的地方如RoleBinding时被引用，理解这一点很重要。\n\n从集群内部，即pod中访问API Server时，需要ServiceAccount来标识身份；从集群外部访问API Server时，则需要走外部验证，包括：客户端证书、密码、普通令牌、引导令牌。\n\n### ServiceAccount\n\n每个命名空间都会有一个默认的ServiceAccount。一个典型的ServiceAccount如下\n\n```shell\ngd % kubectl --kubeconfig ~/.kube/config-test get sa -o yaml\napiVersion: v1\nitems:\n- apiVersion: v1\n  imagePullSecrets:\n  - name: acr-credential-560b66540f01e51c18524b09ad7f575f\n  - name: acr-credential-6731ef77d88edc24b279ebf20860f30f\n  - name: acr-credential-5dee66918cdf5d93de4aa5cd90247f73\n  - name: acr-credential-be55512166dd26eda658d0706de5a06a\n  - name: acr-credential-bab42ef118a2913b05cd8cdb95441d70\n  kind: ServiceAccount\n  metadata:\n    creationTimestamp: \"2020-11-10T06:48:55Z\"\n    name: default\n    namespace: default\n    resourceVersion: \"100598603\"\n    selfLink: /api/v1/namespaces/default/serviceaccounts/default\n    uid: 4ef6a2d3-19ad-47cf-a2de-135f2c9d86b5\n  secrets:\n  - name: default-token-vrqk9\nkind: List\nmetadata:\n  resourceVersion: \"\"\n  selfLink: \"\"\n```\n\n')
</script>
<template>
    <div class="card">
        <div class="card-body text-start">
            <div id="article-content" class="article-content" v-html="compileHtml">
            </div>
        </div>
    </div>
</template>