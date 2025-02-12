import { forwardRef } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

type ButtonProps = {
  text: string
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, style, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        // @ts-ignore It works, Stylesheet is an object, so it can be spread
        style={{ ...styles.container, ...style }}
        {...pressableProps}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
})

export default Button
