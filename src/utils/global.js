import { MessageBox } from 'element-ui'
export default {
    install(Vue, options) {
        Vue.prototype.confirm = function (parmas) {
            MessageBox.confirm(parmas.content, parmas.tip ||'提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: parmas.tip || 'warning',
                center: true
            }).then( () => {
                this.$message({
                    type: 'success',
                    message: '删除成功'
                })
            }).catch( () => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        }
    }
}