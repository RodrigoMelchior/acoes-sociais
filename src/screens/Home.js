
import React from "react";
import { Text } from "react-native";
//import Icon from "react-native-vector-icons/Feather";


//@inject("homeStore")
//@observer
export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <Image style={styles.logoImage} source={Images.logoMaisBb3} />
            ),
            title: ``,
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        const newPayload = {
                            ...payload,
                            primaryButton: {
                                title: "Sair",
                                onPress: () => navigation.replace("Login")
                            }
                        };
                        PubSub.publish(Events.MODALALERT_SHOW, newPayload);
                    }}
                >
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewUserInfo}>
                    <Text>teste</Text>
                </View>               
            </View>
        );
    }

    async componentDidMount() {
        const { homeStore } = this.props;
        await homeStore.configureNavigationOptions();
        //await cobanStore.verifyPilot();
    }
}

Home.propTypes = {
    navigation: PropTypes.any.isRequired,
    homeStore: PropTypes.any
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.defaultBackgroundColor
    },
    viewUserInfo: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: Colors.white
    },
    homeText: {
        color: "#6E6E6E",
        marginTop: 35,
        marginLeft: 20,
        fontFamily: "Geomanist",
        fontSize: 14,
        fontWeight: "500"
    },
    homeOptions: {
        flexDirection: "row",
        paddingTop: 10
    },
    logoImage: {
        width: 102.11,
        height: 31.91,
        marginLeft: 16
    },
    exclamationImage: {
        width: 94,
        height: 94,
        alignSelf: 'center'
    }
};
