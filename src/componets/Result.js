import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
 const {nombre, capital,isss, afp, renta,  neto, errorMessage} = props;
 return (
 <View style={styles.content}>
 {neto && (
<View style={styles.boxResult}>
 <DataResult title="Nombre:" value={`${nombre}`} />
 <DataResult title="Sueldo:" value={`${capital} €`} />
 <DataResult title="Isss:" value={`${isss} €`} />
 <DataResult title="Afp:" value={`${afp} €`} />
 <DataResult title="Renta:" value={`${renta} €`} />
 <DataResult title="Neto:" value={`${neto} €`} />
 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}
function DataResult(props) {
 const {title, value} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
 boxResult: {
 padding: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
justifyContent: 'space-between',
 marginBottom: 20,
 },
 error: {
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
});