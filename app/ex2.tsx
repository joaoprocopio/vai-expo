import { SafeAreaView, StyleSheet, View } from "react-native"

export default function Exercicio$2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerFirst}>
        <View style={styles.containerFirstInner$1} />
        <View style={styles.containerFirstInner$2} />
      </View>
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
    flexDirection: "row",
  },
  containerSecond: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
  containerFirstInner$1: {
    flex: 0.5,
    backgroundColor: "lime",
  },
  containerFirstInner$2: {
    flex: 0.5,
    backgroundColor: "aquamarine",
  },
})
