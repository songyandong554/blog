
<template>
    <div>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <div style="border: 1px solid #ccc;">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig"
                :mode="mode" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
                @onCreated="onCreated" />
        </div>
        <el-button type="primary" plain @click="addhtml">提交</el-button>
    </div>

</template>

<script>
import Vue from 'vue'
import { mapState } from "vuex";
import { nanoid } from 'nanoid'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import "@wangeditor/editor/dist/css/style.css"

export default Vue.extend({
    name: 'RichText',
    components: { Editor, Toolbar },
    data() {
        return {
            editor: null,
            html: '',
            title: '',
            toolbarConfig: {},
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'default', // or 'simple'
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },

        addhtml() {
            if (this.title == '') {
                return this.$message.error('标题不能为空');
            }
            const id = nanoid()
            const date = new Date()
            let m = date.getMonth()+1
            let d = date.getDate()
            if (m < 10) {
                m = '0' + m
            }
            if (d < 10) {
                d = '0' + d
            }
            const time = date.getFullYear() + '/' + m + "/" + d
            let data = { id: id, time: time, title: this.title, text: this.html }
            this.$store.dispatch('addtext', data)
            this.$message({
                message: '发布成功',
                type: 'success'
            });
            data = {}
            this.title = ''
            this.html = ''
        }
    },
    computed: {
        ...mapState(["blogdata"])
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>
<style lang="scss" scoped>

</style>