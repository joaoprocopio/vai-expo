import { SafeAreaView, StyleSheet, View } from "react-native"

export default function Exercicio$1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerFirst} />
      <View style={styles.containerSecond} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFirst: {
    flex: 0.5,
    backgroundColor: "crimson",
  },
  containerSecond: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
})
