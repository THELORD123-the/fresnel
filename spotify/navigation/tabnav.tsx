import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootBotommParamList } from '../constantes/Types'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// import { Colors } from '../constantes/Colors';
import { scale, StatusBarHeight, StatusBarHeightSecond, verticalScale } from '../styles/responsiveSize';
// import { ThemeText } from '../components/ThemeText';
// import { Row } from '../components/Row';
import { TicketIcon, PackageIcon, HouseSimpleIcon, GearIcon } from 'phosphor-react-native';
import Home from '../screens/Acceuil/Home';
import Colis from '../screens/Colis/Colis';
import Setting from '../screens/plus/Setting';
// import TicketsScreen from '../screens/Tickets/TicketsScreen';
import SystemNavigationBar from 'react-native-system-navigation-bar';
// <Ticket size={32} weight="fill" />

function getTabIcon(label: any, isFocused: boolean) {
    switch (label) {
        case 'Accueil':
            return isFocused ? <HouseSimpleIcon size={18} weight="fill" color={Colors.jaune} /> : <HouseSimpleIcon size={19} weight="fill" color={Colors.Noir} />
        case 'Colis':
            return isFocused ? <PackageIcon size={18} weight="fill" color={Colors.jaune} /> : <PackageIcon size={19} weight="fill" color={Colors.Noir} />
        case 'Tickets':
            return isFocused ? <TicketIcon size={18} weight="fill" color={Colors.jaune} /> : <TicketIcon size={19} weight="fill" color={Colors.Noir} />       
        default: return null ;
    }
}

// function de custommisation de la bottom bar 
function CustomTabNavigation({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: 'rgba(0, 0, 0, 0)',  
        }}>
        <View style={
            {
                backgroundColor:Colors.blanche,
                marginBottom: scale(16),
                borderWidth: 0.8,
                borderColor: Colors.Border,
                marginLeft: scale(16),
                marginRight: scale(16),
                flexDirection: 'row',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                justifyContent: 'space-between',
                borderRadius: 15,
                padding: 5,
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? options.title ?? route.name ?? '';
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // paddingVertical: verticalScale(12),
                            flexDirection: 'row',
                            padding:20,
                            
                        },
                        isFocused&&{backgroundColor:Colors.jaune_claire,borderRadius:12}

                    
                    ]}
                    >
                        <Row gap={scale(2)} style={[
                            // isFocused&&{backgroundColor:Colors.jaune_claire,padding:scale(8),borderRadius:18}

                        ]}>
                            {/* Iconne personnalisee sa permets donner l'icon en focntion du label*/}
                            {getTabIcon(label,isFocused)}
                            {/* sa c'est pour le label  */}
                            <ThemeText variant={isFocused ? 'btn_txt_14' : 'Base_14'} style={{color:isFocused?Colors.jaune:Colors.Noir}}>{''} {label.toString()}</ThemeText>
                        </Row>

                    </TouchableOpacity>
                )
            })}

        </View>
        </SafeAreaView>
    )



}


const BottomNavigation = () => {
    const Tab = createBottomTabNavigator<RootBotommParamList>()
    SystemNavigationBar.navigationHide()
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator tabBar={props => <CustomTabNavigation {...props}/>}
                
                screenOptions={{
                    headerShown: false,
                    
                }}
            >
                <Tab.Screen name='Accueil' component={Home}  />
                <Tab.Screen name='Tickets' component={TicketsScreen} />
                <Tab.Screen name='Colis' component={Colis} />
            </Tab.Navigator>
        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})

