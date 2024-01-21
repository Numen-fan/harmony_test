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
import { initTabBarData } from '@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData';
import { LAYOUT_WIDTH_OR_HEIGHT, NORMAL_FONT_SIZE, BIGGER_FONT_SIZE, MAX_FONT_SIZE, MAX_OFFSET_Y, REFRESH_TIME } from '@bundle:com.example.list_harmony/entry/ets/common/CommonConstants';
import GoodsList from '@bundle:com.example.list_harmony/entry/ets/view/GoodsListComponent';
import PutDownRefresh from '@bundle:com.example.list_harmony/entry/ets/view/PutDownRefreshLayout';
export default class TabBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.currentOffsetY = 0;
        this.timer = 0;
        this.__tabsIndex = new ObservedPropertySimplePU(0, this, "tabsIndex");
        this.__refreshStatus = new ObservedPropertySimplePU(false, this, "refreshStatus");
        this.__refreshText = new ObservedPropertyObjectPU({ "id": 16777291, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, this, "refreshText");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentOffsetY !== undefined) {
            this.currentOffsetY = params.currentOffsetY;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
        if (params.tabsIndex !== undefined) {
            this.tabsIndex = params.tabsIndex;
        }
        if (params.refreshStatus !== undefined) {
            this.refreshStatus = params.refreshStatus;
        }
        if (params.refreshText !== undefined) {
            this.refreshText = params.refreshText;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabsIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabsIndex.aboutToBeDeleted();
        this.__refreshStatus.aboutToBeDeleted();
        this.__refreshText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tabsIndex() {
        return this.__tabsIndex.get();
    }
    set tabsIndex(newValue) {
        this.__tabsIndex.set(newValue);
    }
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(newValue) {
        this.__refreshStatus.set(newValue);
    }
    get refreshText() {
        return this.__refreshText.get();
    }
    set refreshText(newValue) {
        this.__refreshText.set(newValue);
    }
    firstTabBar(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
            Column.height(LAYOUT_WIDTH_OR_HEIGHT);
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777292, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Text.fontSize(this.tabsIndex === 0 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE);
            Text.fontColor(this.tabsIndex === 0 ? Color.Black : { "id": 16777304, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    otherTabBar(content, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
            Column.height(LAYOUT_WIDTH_OR_HEIGHT);
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(content);
            Text.fontSize(this.tabsIndex === index + 1 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE);
            Text.fontColor(this.tabsIndex === index + 1 ? Color.Black : { "id": 16777304, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    putDownRefresh(event) {
        if (event === undefined) {
            return;
        }
        switch (event.type) {
            case TouchType.Down:
                this.currentOffsetY = event.touches[0].y;
                break;
            case TouchType.Move:
                this.refreshStatus = event.touches[0].y - this.currentOffsetY > MAX_OFFSET_Y;
                break;
            case TouchType.Cancel:
                break;
            case TouchType.Up:
                // Only simulation effect, no data request
                this.timer = setTimeout(() => {
                    this.refreshStatus = false;
                }, REFRESH_TIME);
                break;
        }
    }
    aboutToDisappear() {
        clearTimeout(this.timer);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create();
            Tabs.onChange((index) => {
                this.tabsIndex = index;
            });
            Tabs.vertical(false);
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Scroll.create();
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event) => {
                        this.putDownRefresh(event);
                    });
                    if (!isInitialRender) {
                        Scroll.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    if (isInitialRender) {
                                        ViewPU.create(new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId));
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                            }
                        });
                    }
                    else {
                        If.branchId(1);
                    }
                    if (!isInitialRender) {
                        If.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                If.pop();
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new GoodsList(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create({ "id": 16777293, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777304, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: this.firstTabBar.bind(this) });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.justifyContent(FlexAlign.Center);
                            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                            Column.height(LAYOUT_WIDTH_OR_HEIGHT);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item);
                            Text.fontSize(MAX_FONT_SIZE);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                    });
                    TabContent.tabBar({ builder: () => {
                            this.otherTabBar.call(this, item, index !== undefined ? index : 0);
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, initTabBarData, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TabBarsComponent.js.map