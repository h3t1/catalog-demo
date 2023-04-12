<template>
    <div class="navbar">
        <button class="btn-no-style header-hamburger-btn" @click="toggleMenu">
            <svg v-if="showMenu" id="hamburger-close" class="" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M.293.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414z" fill="#333333">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M.293 15.707a1 1 0 0 1 0-1.414l14-14a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 0 1-1.414 0z" fill="#333333">
                </path>
            </svg>
            <svg v-else id="hamburger-btn" class="" width="20" height="14" viewBox="0 0 20 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill="#333333"></rect>
                <rect y="6" width="12" height="2" rx="1" fill="#333333"></rect>
                <rect y="12" width="20" height="2" rx="1" fill="#333333"></rect>
            </svg>
        </button>
        
        <div class="header-store-title">
        <router-link to="/" >
            <img alt="Catalog" src="../../assets/logo.png">
        </router-link>
            <div class="store-name"><router-link to="/" >Catalog</router-link></div>
        </div>
        <button class="btn-no-style header-search" @click="() => { expandSearch = true }">
            <svg id="header-search" class="" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 0 9 0a9 9 0 0 0 0 18z" fill="#333333"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.293 14.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414z" fill="#333333">
                </path>
            </svg>
        </button>
        <router-link to="/cart">
        <button class="btn-no-style">
            <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0zM13.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414zM5.025 9H3l1.493 9.36C4.832 20.462 5.647 22 8.675 22h6.385c3.293 0 3.78-1.473 4.161-3.51L21 9h-2.035l-1.71 9.122c-.199 1.065-.35 1.378-.485 1.523-.043.046-.331.355-1.71.355H8.675c-1.177 0-1.535-.29-1.66-.42-.19-.196-.396-.6-.547-1.537v-.001L5.024 9z"
                    fill="#333333"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19 7H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM5 5a3 3 0 0 0 0 6h14a3 3 0 1 0 0-6H5z" fill="#333333">
                </path>
                <rect x="9" y="13" width="2" height="5" rx="1" fill="#333333"></rect>
                <rect x="13" y="13" width="2" height="5" rx="1" fill="#333333"></rect>
            </svg>
        </button>
        </router-link>
        <search-component :expand-search="expandSearch" @update:expandSearch="onExpandSearch" />
        <side-bar-component :show-menu="showMenu" />
    </div>
</template>
<script>
import SearchComponent from '@/components/header/SearchComponent';
import SideBarComponent from '@/components/header/SideBarComponent.vue';
export default {
    name: 'TopMenuComponent',
    components: { SearchComponent, SideBarComponent },
    data() {
        return {
            showMenu: false,
            expandSearch: false,
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        handleScroll() {
            const navBar = document.querySelector('.navbar');
            if (window.pageYOffset > 35) {
                navBar.classList.add('sticky');
            } else {
                navBar.classList.remove('sticky');
            }
        },
        onExpandSearch(value) {
            this.expandSearch = value;
        },
    },
    watch: {
        expandSearch(newValue) {
            // get the `body` element
            const body = document.querySelector('body')
            if (newValue) {
                // if the `hideOverflow` prop is true, remove the `overflow` property from the `body` element
                body.style.overflow = 'hidden'
            } else {
                // if the `hideOverflow` prop is false, set the `overflow` property back to its default value
                body.style.overflow = ''
            }
        },
        showMenu(newValue) {
            // get the `body` element
            const body = document.querySelector('body')
            if (newValue) {
                // if the `hideOverflow` prop is true, remove the `overflow` property from the `body` element
                body.style.overflow = 'hidden'
            } else {
                // if the `hideOverflow` prop is false, set the `overflow` property back to its default value
                body.style.overflow = ''
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>
<style scoped lang="scss">
.navbar {
    width: 100%;
    min-height: 56px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(255, 255, 255);
    -webkit-box-align: center;
    align-items: center;
    padding: 12px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(217, 217, 217);
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    &.sticky {
        position: sticky;
    }

    .header-hamburger-btn {
        width: 20px;
        margin-right: 25px;
    }

    .header-store-title {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        width: -webkit-fill-available;
        -webkit-box-pack: start;
        justify-content: flex-start;
        cursor: pointer;
        overflow: hidden;
        flex: 1 1 0%;
        a {
            color: rgb(51, 51, 51);
            text-decoration: none;

        }
        img {
            height: 44px;
            width: 44px;
            box-sizing: border-box;
            border-radius: 100px;
            flex-basis: 32px;
            margin-right: 12px;
        }

        .store-name {
            font-weight: 600;
            font-size: 16px;
            line-height: 22.4px;
            max-width: 80%;
            color: rgb(51, 51, 51);
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 5px;
            white-space: nowrap;
        }
    }

    .header-search {
        flex-basis: 60px;
    }
}

.btn-no-style {
    appearance: none;
    -webkit-appearance: none;
    /* for Safari and some other browsers */
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
}
</style>