import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  sign?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  sign = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
        console.log(label);
      }}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...styles.buttonText,
          color: color != colors.lightGray ? 'white' : 'black',
          fontWeight: sign ? '400' : '300',
          textAlign: doubleSize ? 'left' : 'center',
          left: doubleSize ? 22 : 0,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
