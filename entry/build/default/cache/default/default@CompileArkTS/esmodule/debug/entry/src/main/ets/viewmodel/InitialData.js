/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const initTabBarData = [
    { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
];
export class GoodsListItemType {
    constructor(goodsImg, goodsName, price) {
        this.goodsImg = goodsImg;
        this.goodsName = goodsName;
        this.advertisingLanguage = { "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.evaluate = { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.price = price;
    }
}
export const goodsInitialList = [
    new GoodsListItemType({ "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
//# sourceMappingURL=InitialData.js.map