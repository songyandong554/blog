<template>
    <div>
        <ArticleItem v-for="item in data " :key="item.id" :blogData="item" />
        <h3 v-show="data.length==0">当前日期什么也没有发布</h3>
    </div>
</template>

<script>
import ArticleItem from '../../components/ArticleItem'
import { mapState } from "vuex";
// import { time } from 'console';
export default {
    name: 'HomePage',
    components: { ArticleItem },
    data() {
        return {
            data: [],
        }
    },
    created() {
        this.data = this.blogdata
    },
    watch: {
        time() {
            const data = this.blogdata.filter(item => item.time == this.time)
            this.data = data
        }
    },

    computed: {
        ...mapState(["blogdata", "time"]),
    },

}

</script>
<style lang="less"  scoped>
div {


    h3 {
        text-align: center;
        margin-top: 20px;
    }
}
</style>