<script setup lang="ts">
import { menuItem } from 'menu';
import { ref, onMounted } from 'vue';
import { createData } from './menu';
const menuData = ref<menuItem[]>(createData())
const menuCom = ref(null)
const test = (): void => {
    menuCom.value.close('0')
}
onMounted(() => {

    console.log()
})
</script>
<template>
    <div style="height:100%">
        <el-menu ref="menuCom" :default-openeds="['0', '1', '2']" :default-active="'0-0'" style="height:100%">
            <div style="height:48px" class="hea">
                <el-menu-item>22sadadasdas</el-menu-item>
            </div>
            <div style="height:calc(100% - 50px);">
                <el-scrollbar>
                    <template v-for="(item, index) in menuData" :key="item">
                        <div v-if="item.childrens.length === 0">
                            <el-menu-item :index="String(index)">
                                {{ item.label }}
                            </el-menu-item>
                        </div>
                        <div v-else>
                            <el-sub-menu :index="String(index)">
                                <template #title>
                                    {{ item.label }}
                                </template>
                                <el-menu-item v-for="(subItem, subIndex) in item.childrens"
                                    :index="`${index}-${subIndex}`">
                                    {{ subItem.label }}
                                </el-menu-item>
                            </el-sub-menu>
                        </div>

                    </template>
                </el-scrollbar>
            </div>

        </el-menu>
    </div>
</template>
<style scoped>
.hea {
    border-bottom-style: solid;
    border-bottom-color: var(--el-border-color);
    border-bottom-width: 1px;
    padding-bottom: 9px;
}

#app>section>section>aside>div>ul>div.hea>li {
    padding: 0 5px;
}
</style>
