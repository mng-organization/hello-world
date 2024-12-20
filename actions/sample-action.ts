export const SampleActions = async (input: string) => {
    console.log('SampleActions', input)
    return {
        type: 'SAMPLE_ACTION',
        payload: input
    }
}