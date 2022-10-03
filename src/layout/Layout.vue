<template>
    <div class="container-md overflow-hidden text-center">
        <!--菜单栏-->
        <div class="row mx-1 my-2">
            <div class="col">
                <slot name="menu"></slot>
            </div>
        </div>
        <div class="row m-1">
            <!--内容栏（依据情况填充博客列表、博客详情、评论等）-->
            <div class="col-md-9">
                <slot name="content"></slot>
            </div>
            <!--侧边卡片-->
            <div class="col-md-3">
                <slot name="side-card"></slot>
            </div>
        </div>
        <!--底部-->
        <div class="row">
            <div class="col">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>