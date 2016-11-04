/**
 * Created by qi_l on 2016/11/4.
 * 使用my.js
 */

/**
 * 流程类
 * @param {String} bindID 节点ID
 * @param {Object} [jsondata] 节点配置数据
 */
function flow(bindID, jsondata) {
    var property = {
        width: 1366,
        height: 768,
        toolBtns: ["start", "end", "task", "node", "chat", "state", "plug", "join", "fork", "complex"],
        haveHead: true,
        headBtns: ["save"],//如果haveHead=true，则定义HEAD区的按钮，现在head被放在了侧方
        haveTool: true,
        haveGroup: false,
        useOperStack: true
    };

    var remark = {
        cursor: "选择指针",
        direct: "转换连线",
        start: "开始结点",
        end: "结束结点",
        task: "任务结点",
        fork: "分支结点",
        join: "联合结点"
    };

    var instance;
    jsondata = jsondata || {};

    instance = $.createGooFlow($("#"+bindID), property);
    instance.setNodeRemarks(remark);
    instance.onItemDel = function (id, type) {
        return confirm("确定要删除该单元吗?");
    };
    instance.$max = 9;
    instance.loadData(jsondata);
}