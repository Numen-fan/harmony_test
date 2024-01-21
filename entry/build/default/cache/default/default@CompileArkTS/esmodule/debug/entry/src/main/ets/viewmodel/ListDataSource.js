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
import { goodsInitialList } from '@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData';
import { MAGNIFICATION, MAX_DATA_LENGTH } from '@bundle:com.example.list_harmony/entry/ets/common/CommonConstants';
/**
 * create a List range
 */
const createListRange = () => {
    let result = new Array();
    for (let i = 0; i < MAGNIFICATION; i++) {
        result = result.concat(goodsInitialList);
    }
    return result;
};
/**
 * LazyLoad Class
 */
class BasicDataSource {
    constructor() {
        this.listeners = [];
    }
    totalCount() {
        return 0;
    }
    getData(index) {
        return undefined;
    }
    registerDataChangeListener(listener) {
        if (this.listeners.indexOf(listener) < 0) {
            this.listeners.push(listener);
        }
    }
    unregisterDataChangeListener(listener) {
        const position = this.listeners.indexOf(listener);
        if (position >= 0) {
            this.listeners.splice(position, 1);
        }
    }
    notifyDataReload() {
        this.listeners.forEach((listener) => {
            listener.onDataReloaded();
        });
    }
    notifyDataAdd(index) {
        this.listeners.forEach((listener) => {
            listener.onDataAdd(index);
        });
    }
    notifyDataChange(index) {
        this.listeners.forEach((listener) => {
            listener.onDataChange(index);
        });
    }
    notifyDataDelete(index) {
        this.listeners.forEach((listener) => {
            listener.onDataDelete(index);
        });
    }
    notifyDataMove(from, to) {
        this.listeners.forEach((listener) => {
            listener.onDataMove(from, to);
        });
    }
}
export class ListDataSource extends BasicDataSource {
    constructor() {
        super(...arguments);
        this.listData = createListRange();
    }
    totalCount() {
        return this.listData.length;
    }
    getData(index) {
        return this.listData[index];
    }
    pushData() {
        if (this.listData.length < MAX_DATA_LENGTH) {
            // this.listData = [...this.listData, ...goodsInitialList];
            this.listData.concat(goodsInitialList);
            this.notifyDataAdd(this.listData.length - 1);
        }
    }
}
//# sourceMappingURL=ListDataSource.js.map