'use strict';

import React from "react"
import {Scene, Router, Drawer} from "react-native-router-flux";
import { connect, Provider } from 'react-redux';

import { configureStore } from './store/store';
import MainFrag from './screens/main';
import ListView from './redux/container/list';
import SectionFrag from './screens/section'
import DiagnosticFrag from './screens/diagnostic';
import CaseFrag from './screens/case';
import EchoView from './components/echoView';
import SideMenu from './components/sideMenu';
import DetailView from './redux/container/details';
import AdvanceSearch from './screens/adSearch';
import AdResult from './redux/container/adResult';


const store = configureStore();
const RouterRedux = connect()(Router);


//Screen names
const RouterComponent = () => (
    <Provider store={store}>
        <RouterRedux>
    <Scene key="root" hideNavBar>
            <Scene key="echo"
                   back
                   clone component={EchoView}
                   getTitle={({ navigation }) => navigation.state.key}
            />
            <Drawer key="drawer" drawerImage={require('./icons/menu-icon.png')} contentComponent={SideMenu}
                    initial>
                <Scene key="main">
                    <Scene
                        key="home"
                        component={MainFrag}
                        title="Main"
                    />
                    <Scene
                        key="section"
                        component={SectionFrag}
                        title="Remedy"
                    />
                    <Scene
                        key="search"
                        component={AdvanceSearch}
                        title="Search"
                    />
                    <Scene
                        key="diagnostic"
                        component={DiagnosticFrag}
                        title="Diagnostic"
                    />
                    <Scene
                        key="caseStudy"
                        component={CaseFrag}
                        title="Case"
                    />
                </Scene>
            </Drawer>

                <Scene
                    back
                    clone
                    getTitle={({ navigation }) => navigation.state.key}
                    key="list"
                    component={ListView}
                    title="Section "
                />
                <Scene
                    back
                    clone
                    getTitle={({ navigation }) => navigation.state.key}
                    key="adResult"
                    component={AdResult}
                    title="Advance Search Result"
                />

                <Scene
                    back
                    clone
                    getTitle={({ navigation }) => navigation.state.key}
                    key="details"
                    component={DetailView}
                    title="Details"
                />

    </Scene>
        </RouterRedux>
    </Provider>

    );


export default RouterComponent;
