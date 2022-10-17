//该文件用于创建Vuex中最为核心的store
import Vue from "vue";
//引入vuex
import Vuex from "vuex";
Vue.use(Vuex);
//准备actions——用于相应组件中的动作
const actions = {

    addtext(context, val) {
        context.commit("ADDTEXT", val)
    }
}
//准备mutations——用于操作数据(state)
const mutations = {
    ADDTEXT(state, val) {
        state.blogdata = [...state.blogdata, val]
    },
    updataTime(state, val) {
        state.time = val
    },



};
//准备state——用于存储数据
const state = {
    blogdata: [
        { id: '1', time: '2022/10/06', title: '分成两半的子爵', text: '<p style="text-align: justify;"><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;"><strong>卡爾維諾從事文學創作40年</strong></span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">，一直嘗試著用各種手法表現當代人的生活和心靈。他的作品融現實主義、超現實主義與后現代主義于一身，以豐富的手法、奇特的角度構造超乎想像的、富有濃厚童話意味的故事，深為當代作家推崇，並給他們帶來深刻影響。《</span><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 13px;">我們的祖先</span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">》三部曲、《</span><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 13px;">命運交叉的城堡</span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">》、《</span><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 13px;">帕洛馬爾</span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">》等達到驚人的藝術高度和思想深度。《</span><span style="color: rgb(66, 144, 247); background-color: rgb(255, 255, 255); font-size: 13px;">義大利童話</span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">》最大限度地保持了義大利民間口頭故事的原貌，藝術價值和學術價值兼具，是再現義大利「民族記憶」之深厚積淀的不可多得的作品。《美國講稿》是卡爾維諾對自己近40年小說創作實踐的豐富經驗進行的系統回顧和理論上的總結與闡發。他的作品以特有的方式反映了時代，更超越了時代。<br><br>關於生平，卡爾維諾寫道：「</span><span style="color: rgb(114, 192, 64); background-color: rgb(255, 255, 255); font-size: 13px;"><u><em><strong>我仍然屬於和克羅齊一樣的人，認為一個作者，只有作品有價值。因此我不提供傳記資料。我會告訴你你想知道的東西。但我從來不會告訴你真實。</strong></em></u></span><span style="color: rgb(35, 35, 35); background-color: rgb(255, 255, 255); font-size: 13px;">」</span></p>' },
        { id: '2', time: "2022/10/02", title: "树上的男爵", text: "爱情像吵架一样疯疯傻傻地重新开始。这其实是一回事，但柯西莫对此一点也不开窍。 “你为什么让我痛苦？” “因为我爱你。” 这时他火大了：“不，你不爱我！恋爱的人需要幸福，不要痛苦！” “恋爱的人只要爱情，也用痛苦来换取。” “那么，你是存心让我受苦。” “对，为了证实你是不是爱我。” 男爵的哲学拒绝走极端：“痛苦是消极的精神状态。” “爱情包括一切。” “痛苦总是会被克服的。” “爱情不排斥任何东西。” “有些东西我永远不会接受。” “你接受了，因为你爱我并为此而忍受痛苦。” " },
        { id: '3', time: "2022/10/04", title: '看不见的骑士', text: '在这个故事发生的时代，世事尚为混乱。名不副实的事情并不罕见，名字、思想、形式和制度莫不如此。而另一方面，在这个世界上又充斥着许多既无名称又无特征的东西、现象和人。生存的自觉意识、顽强追求个人影响以及同一切现存事物相抵触的思想在那个时代还没有普及开来，由于许多人无所事事---因为贫穷或无知，或者因为他们很知足---因此相当一部分的意志消散在空气里。那么，也可能在某一处这种稀薄的意识浓缩，凝结成块，就像微小的水珠汇聚成一片片云雾那样。这种块状物，出于偶然或出于自愿，遇上一个空缺的名字和姓氏（在当时虚位以待的姓氏宗族经常可见），遇上一项责任明确的职务，而且---特别是---遇上一副空的铠甲，因为没有铠甲，一个存在的人随着光阴流逝也有消失的危险，可以想见一个不存在的人将如何......阿季卢尔福就这样出现了......' },
        
    ],
    time: ''
};
//准备getters——用于将state中的数据进行加工
const getters = {

};

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});
