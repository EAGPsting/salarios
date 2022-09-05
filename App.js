/**
* @format
* @flow strict-local
*/
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button,} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/componets/forms';
import Footer from './src/componets/Footer';
import Result from './src/componets/Result';

export default function App() {
 const [capital, setCapital] = useState(null);
 const [isss, setIsss] = useState(null);
 const [afp, setAfp] = useState(null);
 const [renta, setRenta] = useState(null);
 const [neto, setNeto] = useState(null);
 const [nombre, setNombre] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');

useEffect(() => {
 if (capital && nombre) calculate();
 else reset();
 }, [capital, nombre]);
 const calculate = () => {
 reset();
if (!capital) {
 setErrorMessage('Añade el salario');
 } else if (!nombre) {
 setErrorMessage('Añade tu nombre completo');
 } else {
        const isssc = capital*0.03;
        const afpc = capital*0.04;
        const rentac = capital*0.05;
        const sueldoc = capital - (isss + afp + renta);
        setIsss(isssc);
        setAfp(afpc);
        setRenta(rentac);
        setNeto(sueldoc);
 }
 };
  const reset = () => {
 setErrorMessage('');
 setNeto(null);
 };
 return (
 <>
 <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.safeArea}>
 <View style={styles.background} />
 <Text style={styles.titleApp}>Calcula tu salario</Text>
 <Form
 setNombre={setNombre}
 setCapital={setCapital}
 />
 </SafeAreaView>
 <Result
 nombre={nombre}
 capital={capital}
 isss={isss}
 afp={afp}
 renta={renta}
 neto={neto}
 errorMessage={errorMessage}
 />
 <Footer calculate={calculate} />
 </>
 );
}
const styles = StyleSheet.create({
 safeArea: {
 height: 290,
 alignItems: 'center',
 },
background: {
 backgroundColor: colors.PRIMARY_COLOR,
 height: 200,
 width: '100%',
 borderBottomLeftRadius: 30,
 borderBottomRightRadius: 30,
 position: 'absolute',
 zIndex: -1,
 },
 titleApp: {
 fontSize: 25,
 fontWeight: 'bold',
 color: '#fff',
 marginTop: 15,
 },
});
