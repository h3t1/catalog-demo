<template>
    <div class="search-component" v-if="expandSearch">
        <div class="search-overlay" @click="collapseSearch()"></div>
        <div class="search-top-bar">

            <svg id="close-search" @click="collapseSearch()" width="16" height="16" viewBox="0 0 16 16" fill="null"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M.293.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M.293 15.707a1 1 0 0 1 0-1.414l14-14a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 0 1-1.414 0z"></path>
            </svg>
            <div class="search-input-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 0 9 0a9 9 0 0 0 0 18z" fill="#333333"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.293 14.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414z"
                        fill="#333333">
                    </path>
                </svg>
                <input id="global-search-box" type="text" placeholder="Cari produk di toko ini..." autocomplete="off"
                    class="SearchInput" v-model="query">
            </div>
        </div>
        <div class="search-result" v-if="query">
            <div class="NoSearchResult">
                <svg id="no-result-icon" width="116" height="116" viewBox="0 0 116 116" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="58" cy="45.433" rx="17.4" ry="18.367" stroke="#CBCFDC" stroke-linecap="round"
                        stroke-dasharray="0.5 2"></ellipse>
                    <path stroke="#CBCFDC" stroke-linecap="round"
                        d="M58.5 8.233V16.9M71.052 20.422l4.82-6.047M79.426 29.014l5.284-2.393M31.068 26.677l5.333 2.28M40.828 14.376l4.818 6.048">
                    </path>
                    <path
                        d="M88.933 36.733H27.067v67.314a2.669 2.669 0 0 0 2.668 2.669h56.53a2.669 2.669 0 0 0 2.668-2.669V36.733z"
                        fill="#E1E4ED"></path>
                    <path
                        d="M43.131 47.777c1.272 0 2.303-1.086 2.303-2.424 0-1.34-1.03-2.424-2.303-2.424-1.272 0-2.303 1.085-2.303 2.424 0 1.338 1.031 2.424 2.303 2.424zM74.557 47.773c1.271 0 2.302-1.084 2.302-2.422s-1.031-2.422-2.302-2.422c-1.272 0-2.302 1.084-2.302 2.422s1.03 2.422 2.302 2.422z"
                        fill="#CBCFDC"></path>
                    <path
                        d="M61.523 70.628h-5.5c-7.835 0-14.206-7.411-14.206-16.519v-8.756c0-.722.554-1.308 1.242-1.308.687 0 1.245.586 1.245 1.308v8.756c0 7.663 5.255 13.902 11.718 13.902h5.5c6.46 0 11.719-6.24 11.719-13.902v-8.756c0-.722.555-1.308 1.243-1.308.687 0 1.244.586 1.244 1.308v8.756c0 9.108-6.37 16.52-14.205 16.52z"
                        fill="#CBCFDC"></path>
                    <path
                        d="M61.522 68.079h-5.5c-7.798 0-14.14-6.674-14.14-14.875v-7.853c0-.684.528-1.24 1.177-1.24.653 0 1.178.557 1.178 1.24v7.853c0 6.834 5.285 12.396 11.785 12.396h5.5c6.499 0 11.783-5.562 11.783-12.396v-7.853c0-.684.529-1.24 1.179-1.24s1.177.557 1.177 1.24v7.853c0 8.2-6.346 14.875-14.139 14.875z"
                        fill="#fff"></path>
                </svg>
                <div id="no-result" data-testid="no-products">
                    No results found
                </div>
                <div id="search-another-keyword">
                    Try searching with other keywords.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchComponent',
    props: ['expandSearch'],
    data() {
        return {
            query: ''
        };
    },
    methods: {
        collapseSearch() {
            this.query = '';
            this.$emit('update:expandSearch', false);
        },

    },
    watch: {
        query(newValue) {
            const newQuery = { search: newValue };
            if (newValue === '') {
                this.$router.replace({ path: this.$route.path });
            }
            else {
                this.$router.push({ path: this.$route.path, query: newQuery });
            }
        }
    }
}
</script>
<style scoped lang="scss">
.search-component {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 5;

    .search-overlay {
        min-height: calc(100vh - 56px);
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .search-top-bar {
        border: 1px solid rgb(242, 242, 242);
        width: 100%;
        max-width: 500px;
        position: fixed;
        top: 0px;
        padding: 14px 16px;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        #close-search {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            cursor: pointer;
        }

        .search-input-container {
            background-color: rgb(242, 242, 242);
            box-sizing: border-box;
            padding: 6px 12px;
            margin-left: 16px;
            border-radius: 4px;
            flex: 1 1 0%;
            height: 40px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;

            &:focus-within {
                border: 1px solid;
                color: rgb(49, 27, 146);
                background: rgb(255, 255, 255);
            }

            #global-search-box {
                background-color: rgb(242, 242, 242);
                font-size: 14px;
                font-weight: 400;
                line-height: 19.6px;
                color: rgb(51, 51, 51);
                border: none;
                outline: none;
                box-sizing: border-box;
                padding: 6px 12px;
                height: 100%;
                flex: 1 1 0%;
                caret-color: rgb(49, 27, 146);

                &:focus {
                    background: rgb(255, 255, 255);
                }
            }
        }
    }

    .search-result {
        width: 100%;
        height: 100vh;
        background-color: white;
        position: absolute;
        top: 69px;

        .NoSearchResult {
            padding: 0px 1rem;
            text-align: center;
            color: rgb(85, 85, 85);
            font-size: 14px;
            height: calc(100vh - 112px);
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;

            #no-result {
                margin-top: 16px;
                color: rgb(51, 51, 51);
                font-size: 16px;
                font-weight: 700;
                line-height: 22.4px
            }

            #search-another-keyword {
                margin-top: 10px;
                margin-bottom: 50px;
                color: rgb(96, 96, 96);
                font-weight: 400;
                font-size: 14px;
                line-height: 19.6px;
            }
        }
    }
}
</style>