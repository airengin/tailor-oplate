/**
 * Copyright (c) 2016-2017 EEFUNG Software Co.Ltd. All rights reserved.
 * 版权所有 (c) 2016-2017 湖南蚁坊软件股份有限公司。保留所有权利。
 * Created by liwenjun on 2017/3/13.
 */
module.exports = {
    routes: [
        {
            path: "/home",
            service: "http://192.168.1.214:9192/microService"
        },
        {
            path: "/user",
            service: "http://192.168.1.214:9192/microService"
        },
        {
            path: "/crm",
            service: "http://192.168.1.214:9193/microService"
        }
    ]
};