import Vue from "vue";
import SvgIcon from "./svgIcon";
// 自定义全剧组件
Vue.component("svg-icon", SvgIcon);

// 解析 下载的svg文件
/**
 *  require.context:  读取指定目录的所有文件
 *  1. 目录
 *  2. 是否遍历子级目录
 *  3. 定义遍历文件规则
 */
// 正则里面表示结尾 读取结尾为 .svg的文件
const req = require.context("./svg/", false, /\.svg$/);

// es6
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};

requireAll(req);