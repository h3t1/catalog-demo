<template>
    <div :class="'SideNavigationMenu ' + (showMenu ? 'menu-enter-active' : '')">
        <div id="side-nav-orders" class="SideNavigationMenu__Section">
            <div class="SideNavigationMenu__MenuLeftContainer">
                <div class="SideNavigationMenu__MenuItemHeader">
                    <div class="SideNavigationMenu__MenuLogoContainer"><svg class="SideNavigationMenu__OrdersIcon"
                            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.138 17.89c.413.072.883.11 1.419.11h4.886c.536 0 1.006-.038 1.419-.11A4.009 4.009 0 0 0 10 15a4.01 4.01 0 0 0-3.862 2.89zm-2.136.663C4.218 15.44 6.832 13 10 13c3.167 0 5.782 2.44 5.998 5.553a1 1 0 0 1-.659 1.01c-.858.31-1.828.437-2.896.437H7.557c-1.068 0-2.038-.128-2.896-.437a1 1 0 0 1-.659-1.01zM10 6c-1.108 0-2 .893-2 1.996C8 9.103 8.895 10 10 10s2-.897 2-2.004A1.995 1.995 0 0 0 10 6zM6 7.996C6 5.786 7.79 4 10 4s4 1.785 4 3.996A4.002 4.002 0 0 1 10 12c-2.214 0-4-1.797-4-4.004z"
                                fill="#333333"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.17 3.17C2.436 3.903 2 5.149 2 7.3v5.4c0 1.62.248 2.735.686 3.496.414.72 1.05 1.214 2.06 1.5l.011.003c.671.198 1.505.301 2.543.301h5.4c1.038 0 1.872-.103 2.543-.301l.01-.003c1.011-.286 1.647-.78 2.061-1.5.438-.76.686-1.876.686-3.496V7.3c0-2.151-.436-3.397-1.17-4.13C16.097 2.436 14.851 2 12.7 2H7.3c-2.151 0-3.397.436-4.13 1.17zM1.755 1.755C3.047.464 4.951 0 7.3 0h5.4c2.349 0 4.253.464 5.545 1.755C19.536 3.047 20 4.951 20 7.3v5.4c0 1.782-.265 3.3-.952 4.494-.71 1.233-1.81 2.017-3.244 2.425-.912.268-1.948.381-3.104.381H7.3c-1.156 0-2.192-.113-3.104-.381-1.435-.408-2.534-1.192-3.244-2.425C.265 15.999 0 14.482 0 12.7V7.3c0-2.349.464-4.253 1.755-5.545z"
                                fill="#333333"></path>
                        </svg></div>
                    <div class="SideNavigationMenu__TitleContainer">
                        My order
                    </div>
                </div>
                <div class="SideNavigationMenu__DetailsContainer">
                    All your orders at the LummoSHOP online shop can be seen here.
                </div>
            </div>
            <div class="SideNavigationMenu__ArrowContainer"><svg class="SideNavigationMenu__Arrow-sc-11t9lv7-9 cAcDMK"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.707 11.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0z"
                        fill="#BFBFBF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.707 12.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414z"
                        fill="#BFBFBF"></path>
                </svg></div>
        </div>
        <div class="SideNavigationMenu__Section">
            <div class="SideNavigationMenu__MenuLeftContainer">
                <div class="SideNavigationMenu__MenuItemHeader">
                    <div class="SideNavigationMenu__MenuLogoContainer"><svg class="SideNavigationMenu__InfoIcon" width="20"
                            height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 15a2 2 0 0 0-2 2v1H6v-1a4 4 0 0 1 8 0v1h-2v-1a2 2 0 0 0-2-2z" fill="#333333"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.99 7.514l.24-2.43.01-.08L6.656 2H4.666c-1.225 0-1.602.244-1.74.372-.166.155-.447.567-.624 1.823L2.01 7.182C1.906 8.234 2.62 9 3.627 9c.417 0 1.065-.195 1.632-.596.589-.417.72-.781.73-.885v-.005zM.314 3.96C.709 1.1 1.802 0 4.665 0H15.33c2.86 0 3.952 1.1 4.345 3.96L20 7v8a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V7l.315-3.04zM2 10.637V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4.362a3.721 3.721 0 0 1-1.622.362c-1.045 0-2.293-.496-3.192-1.267C12.467 10.508 11.329 11 10 11c-1.333 0-2.473-.494-3.192-1.273C5.918 10.5 4.676 11 3.628 11A3.73 3.73 0 0 1 2 10.637zm9.996-2.851a2.654 2.654 0 0 1-.009-.075l-.623-5.4L11.327 2H8.684l-.676 5.584v.001c-.036.308.064.602.356.87C8.674 8.74 9.228 9 10 9s1.326-.26 1.637-.545c.228-.21.339-.434.36-.67zm2.002-.197c.055.157.236.465.727.81.578.405 1.236.601 1.653.601 1.002 0 1.715-.763 1.612-1.817v-.001l-.301-2.984c-.177-1.259-.459-1.672-.624-1.826C16.927 2.243 16.552 2 15.33 2h-1.988l.009.078.628 5.27c.01.081.016.162.019.241z"
                                fill="#333333"></path>
                        </svg></div>
                    <div class="SideNavigationMenu__TitleContainer">
                        Store Info
                    </div>
                </div>
                <div class="SideNavigationMenu__InnerSection">
                    <div class="SideNavigationMenu__InnerSectionMenuLogoContainer"><svg
                            class="SideNavigationMenu__LocationIcon" width="12" height="15" viewBox="0 0 12 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.85 4.676c-1.33-6.114-10.363-6.114-11.7 0-.78 3.587 1.638 6.357 3.51 8.235 1.755 1.764 3.316 1.37 4.68 0 1.879-1.878 4.29-4.648 3.51-8.235zM6 8.542a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                fill="#BFBFBF"></path>
                        </svg></div>
                    <div id="header-address" class="SideNavigationMenu__DescContainer"></div>
                </div>
                <div class="SideNavigationMenu__InnerSection">
                    <div class="SideNavigationMenu__InnerSectionMenuLogoContainer">
                        <svg class="SideNavigationMenu__OpenHoursInfoIcon" width="14" height="14" viewBox="0 0 14 14"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0zM5 4.558a1 1 0 0 1 2 0v3h2a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1v-4z"
                                fill="#BFBFBF"></path>
                        </svg>
                    </div>
                    <div class="SideNavigationMenu__StoreSheduleContainer">
                        <div class="StoreSheduleSideNav__Container">
                            <div class="StoreSheduleSideNav__Row" v-for="(val, key) in storeShedule" :key="key">
                                <div class="StoreSheduleSideNav__Day">
                                    {{ key }}
                                </div>
                                <div class="StoreSheduleSideNav__Time">
                                    {{ val }}
                                </div>
                            </div>
                        </div>
                        <div id="side-nav-open-hours-see-more" class="SideNavigationMenu__SeeMoreContainer" @click="expandMenu = !expandMenu">
                            <div class="SideNavigationMenu__SeeMoreText" >
                                {{expandText}}
                            </div>
                            <svg class="SideNavigationMenu__SeeMoreIcon" width="12"
                                height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M.293.293a1 1 0 0 1 1.414 0L6 4.586 4.586 6 .293 1.707a1 1 0 0 1 0-1.414zm11.414 0a1 1 0 0 1 0 1.414L7.414 6a2 2 0 0 1-2.828 0L10.293.293a1 1 0 0 1 1.414 0z"
                                    fill="#311b92"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SideBarComponent',
    props: ['showMenu'],
    data() {
        return {
            expandMenu: false,
            daysOfWeek: {
                Sunday: "Buka 24 Jam",
                Monday: "Buka 24 Jam",
                Tuesday: "Buka 24 Jam",
                Wednesday: "Buka 24 Jam",
                Thursday: "Buka 24 Jam",
                Friday: "Buka 24 Jam",
                Saturday: "Buka 24 Jam"
            },
            
        }
    },
    computed: {
        storeShedule() {
            const smallSet = {};
            const keys = this.expandMenu ? Object.keys(this.daysOfWeek) : Object.keys(this.daysOfWeek).slice(0, 3);

            for (let key of keys) {
                smallSet[key] = this.daysOfWeek[key];
            }
            return smallSet;
        },
        expandText(){
         return  this.expandMenu ? 'Tutup' : 'Baca lebih lanju'
        }
    }
}
</script>
<style scoped lang="scss">
.SideNavigationMenu {
    position: absolute;
    width: 100%;
    top: 106px;
    left: 0;
    max-width: 500px;
    background-color: rgb(255, 255, 255);
    padding: 0px 16px 150px;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;

    &.menu-enter-active {
        transform: translateX(0);
        opacity: 1;
    }

    .SideNavigationMenu__Section {
        background: rgb(255, 255, 255);
        border-bottom: 1px solid rgb(217, 217, 217);
        padding: 20px 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        cursor: pointer;

        &:first-of-type {
            padding-top: 16px;
        }

        .SideNavigationMenu__MenuLeftContainer {
            width: 100%;

            .SideNavigationMenu__MenuItemHeader {
                display: flex;
                -webkit-box-align: center;
                align-items: center;

                .SideNavigationMenu__MenuLogoContainer {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    margin-right: 11px;
                }

                .SideNavigationMenu__TitleContainer {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    letter-spacing: 0.5px;
                    color: rgb(51, 51, 51);
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 19.6px;
                }
            }


            .SideNavigationMenu__DetailsContainer {
                letter-spacing: 0.5px;
                color: rgb(96, 96, 96);
                margin-right: 6px;
                font-weight: 400;
                font-size: 12px;
                line-height: 16.8px;
            }

            .SideNavigationMenu__InnerSection {
                display: flex;
                align-items: flex-start;
                margin-top: 8px;

                .SideNavigationMenu__InnerSectionMenuLogoContainer {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    margin-right: 11px;
                    padding: 2px 0px 0px 5px;
                    width: 16px;
                    height: 16px;
                }

                .SideNavigationMenu__DescContainer {
                    letter-spacing: 0.5px;
                    color: rgb(96, 96, 96);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19.6px;
                }

                .SideNavigationMenu__StoreSheduleContainer {
                    width: 100%;

                    .StoreSheduleSideNav__Row {
                        display: flex;
                        flex-direction: row;
                        -webkit-box-pack: justify;
                        justify-content: space-between;
                        padding-bottom: 4px;

                        .StoreSheduleSideNav__Day,
                        .StoreSheduleSideNav__Time {
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 19.6px;
                            color: rgb(96, 96, 96);
                        }
                    }
                }
            }
        }
    }
}

.SideNavigationMenu__SeeMoreContainer {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;

    .SideNavigationMenu__SeeMoreText {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        letter-spacing: 0.5px;
        color: rgb(49, 27, 146);
        min-width: 70px;
        margin-right: 5px;
        font-weight: 600;
        font-size: 12px;
        line-height: 16.8px;
    }
    svg.SideNavigationMenu__SeeMoreIcon {
        width: 12px;
    }
}
</style>