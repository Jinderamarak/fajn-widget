import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Config from './Config';
import AppConfig from './AppConfig';

import FConfig from './Configs/fajnyc.json';
import MConfig from './Configs/mock.json';

const parseBool = (v: any) => {
    return v ? true : false;
}

const params = new URLSearchParams(location.search);

//  v2

if (params.has("preset") && params.getAll("preset").includes("fajnyc")) {
    Object.keys(FConfig).forEach(key => AppConfig.SetAny(key, FConfig[key]))
}

if (params.has("preset") && params.getAll("preset").includes("mock")) {
    Object.keys(MConfig).forEach(key => AppConfig.SetAny(key, MConfig[key]))
}


//  v1

if (params.has("widget")) {
    AppConfig.SetString("environment", "widget");
    if (params.has("url")) AppConfig.SetString("url", params.get("url"))
} else if (params.has("dimensions")) {
    AppConfig.SetString("environment", 'dimensions');
    if (params.has("testRows")) AppConfig.SetNumber("testRows", parseInt(params.get("testRows")))
} else if (params.has("dev")) {
    AppConfig.SetString("environment", 'dev');
}

if (params.has("back"))
    AppConfig.SetString("back", params.get("back"))
if (params.has("front"))
    AppConfig.SetString("front", params.get("front"))
if (params.has("accent"))
    AppConfig.SetString("accent", params.get("accent"))

if (params.has("scale"))
    AppConfig.SetNumber("scale", parseFloat(params.get("scale")))
if (params.has("pullInterval"))
    AppConfig.SetNumber("pullInterval", parseInt(params.get("pullInterval")))
if (params.has("showTotal"))
    AppConfig.SetBool("showTotal", parseBool(params.get("showTotal")));
if (params.has("showForEntry"))
    AppConfig.SetBool("showForEntry", parseBool(params.get("showForEntry")));
if (params.has("useEntryPercentage"))
    AppConfig.SetBool("useEntryPercentage", parseBool(params.get("useEntryPercentage")));
if (params.has("barRelativeTop"))
    AppConfig.SetBool("barRelativeTop", parseBool(params.get("barRelativeTop")));


if (params.has("pass")) {
    const v2Params = new URLSearchParams(params.get("pass"));
    AppConfig.SetString("url", `${AppConfig.GetString("url")}?${v2Params.toString()}`);
}

if (params.has("verticalAlign"))
    AppConfig.SetBool("verticalCenter", true)



document.documentElement.style.setProperty("--scale", `${AppConfig.GetNumber("scale")}rem`);
document.documentElement.style.setProperty("--back", AppConfig.GetString("back"));
document.documentElement.style.setProperty("--front", AppConfig.GetString("front"));
document.documentElement.style.setProperty("--accent", AppConfig.GetString("accent"));


if (AppConfig.GetBool("verticalCenter"))
    document.documentElement.setAttribute("vertical-align", "yep");

ReactDOM.render(AppConfig.GetString("environment") !== "config" ? <App /> : <Config />, document.getElementById("app"));