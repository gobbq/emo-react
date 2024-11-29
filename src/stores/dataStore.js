import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";


const useDataStore = create(
    subscribeWithSelector((set) => ({
        value: '123',
        checked: false,
        setValue: (value) => set({ value: value }),
        setChecked: (checked) => set({ checked: checked }),
    }))
);

// 使用 subscribe 监听状态变化
useDataStore.subscribe(state => state.value, (state, prev) => {
    console.log('Value changed from', prev, 'to', state);
});

useDataStore.subscribe(state => state.checked, (state, prev) => {
    console.log('Checked changed from', prev, 'to', state);
});

export default useDataStore;