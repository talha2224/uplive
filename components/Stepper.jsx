import React from 'react';
import { View, StyleSheet } from 'react-native';

const Stepper = ({ totalSteps, currentStep }) => {

    totalSteps = Math.max(1, totalSteps || 1);
    currentStep = Math.min(Math.max(1, currentStep || 1), totalSteps);

    const renderSteps = () => {
        const steps = [];
        for (let i = 1; i <= totalSteps; i++) {
            let stepStyle = [styles.step]
            if (i < currentStep) {
                stepStyle.push(styles.completedStep);
            } else if (i === currentStep) {
                stepStyle.push(styles.currentStep);
            } else {
                stepStyle.push(styles.futureStep);
            }

            steps.push(
                <View key={i} style={stepStyle} />
            );
        }
        return steps;
    };

    return (
        <View style={styles.container}>
            {renderSteps()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 10,
        borderRadius: 5,
        overflow: 'hidden',
        paddingHorizontal: 2,
    },
    step: {
        flex: 1,
        height: '100%',
        borderRadius: 3,
        marginHorizontal: 1.5,
    },
    completedStep: {
        backgroundColor: '#497AF7'
    },
    currentStep: {
        backgroundColor: '#497AF7'
    },
    futureStep: {
        backgroundColor: '#302C63',
    },
});

export default Stepper;