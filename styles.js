import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    direction:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        borderColor: '#f0f',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
        padding: 2,
        borderRadius: 5,
        fontSize: 24,
        fontWeight: 'normal'
    },
    notification:{
        //backgroundColor: '#00f',
        textShadowColor: '#ff0',
        margin: 20,
        color: '#f00'
    }
});

export default styles;