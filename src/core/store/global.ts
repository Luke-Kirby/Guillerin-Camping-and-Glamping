import {reactive, toRefs} from "vue";
import {PageData} from "../interfaces";
import {PageService} from "../services/page.service";

const pageService = new PageService();

const state = reactive({
    loading: true,
    isEditable: true,
    page: {} as PageData
});

export default function pageState() {
    const setLoading = (loading: boolean) => {
        state.loading = loading;
    }

    const loadPage = async () => {
        try {
            const pageData = await pageService.getPage("home")
            if (pageData && pageData.data) {
                state.page = pageData.data
            }
        } catch (e) {
            console.log(e)
        } finally {
            state.loading = false
        }
    }

    const setEditMode = (editable: boolean) => {
        state.isEditable = editable
    }

    return {
        ...toRefs(state), // convert to refs when returning
        setLoading,
        setEditMode,
        loadPage
    }
}

