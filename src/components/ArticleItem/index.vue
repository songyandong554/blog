<template>
    <div>
        <h3>{{blogData.title}}</h3>
        <p v-html="blogData.text"></p>
        <p>{{blogData.time}}</p>
        <h3>评论区</h3>
        <el-input v-model="input" placeholder="请输入评论" @keyup.enter.native="addComment"></el-input>

        <p class="comment" v-for="(item,index) in  comment" :key="index">{{item.text}}<span>{{item.time}}</span></p>

    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ["blogData"],
    data() {
        return {
            input: '',
            comment: [{ time: '2022/10/2', text: 'good' }]
        }
    },
    methods: {
        addComment() {
            const date = new Date()
            let m = date.getMonth() + 1
            let d = date.getDate()
            const h = date.getHours()
            const f = date.getMinutes()
            if (m < 10) {
                m = '0' + m
            }
            if (d < 10) {
                d = '0' + d
            }
            const time = date.getFullYear() + '/' + m + "/" + d + '  ' + h + ':' + f
            if (this.input !== '') {
                this.comment = [...this.comment, { time: time, text: this.input }]
            }
            this.input = ''
        }
    }
};
</script>
<style lang="less" scoped>
div {
    padding: 10px;
    color: black;
    border-bottom: 10px solid #f1f2f9;

    p {
        line-height: 1.2;
        font-size: 16px;
        color: #333;
    }

    img {
        margin: 10px 5px;
        width: 200px;
        height: 130px;
    }

    .comment {
        position: relative;
        margin-left: 10px;

        span {
            position: absolute;
            right: 10px;
            display: inline-block;
            font-size: 10px;
            color: #ccc;

        }
    }
}
</style>