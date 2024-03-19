import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {number, buildNumber, deleteNumber, cleanNumber, toggleSign} =
    useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {number}
        </Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => {
            cleanNumber();
          }}
          label="C"
          color={colors.lightGray}
          sign
        />
        <CalculatorButton
          onPress={() => {
            toggleSign();
          }}
          label="+/-"
          color={colors.lightGray}
          sign
        />
        <CalculatorButton
          onPress={() => {
            deleteNumber();
          }}
          label="del"
          color={colors.lightGray}
          sign
        />
        <CalculatorButton
          onPress={() => {}}
          label="/"
          color={colors.orange}
          sign
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => {
            buildNumber('7');
          }}
          label="7"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('8');
          }}
          label="8"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('9');
          }}
          label="9"
        />
        <CalculatorButton
          onPress={() => {}}
          label="x"
          color={colors.orange}
          sign
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => {
            buildNumber('4');
          }}
          label="4"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('5');
          }}
          label="5"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('6');
          }}
          label="6"
        />
        <CalculatorButton
          onPress={() => {}}
          label="-"
          color={colors.orange}
          sign
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => {
            buildNumber('1');
          }}
          label="1"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('2');
          }}
          label="2"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('3');
          }}
          label="3"
        />
        <CalculatorButton
          onPress={() => {}}
          label="+"
          color={colors.orange}
          sign
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => {
            buildNumber('0');
          }}
          label="0"
          doubleSize
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('.');
          }}
          label="."
        />
        <CalculatorButton
          onPress={() => {}}
          label="="
          color={colors.orange}
          sign
        />
      </View>
    </View>
  );
};
