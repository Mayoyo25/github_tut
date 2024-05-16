import axios from 'axios';

const openAIRequest = async (
  userChatLog: any[],
  apiKey: string,
  system: any,
  temperature: number,
  selectedModel: string,
  setCancelRequest: (cancelFn: () => boolean) => void
): Promise<any> => {
  const url = 'https://api.openai.com/v1/chat/completions';
  const userChatLogAndSystem = [system, ...userChatLog];
  const data = {
    model: selectedModel,
    messages: userChatLogAndSystem,
    temperature: temperature,
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };
  const abortController = new AbortController();

  // Set the cancel function after creating the abortController
  if (setCancelRequest) {
    setCancelRequest(() => {
      const canceled = abortController.signal.aborted;
      if (canceled) {
        return true;
      } else {
        return false;
      }
    });
  }
  try {
    const response = await axios.post(url, data, {
      headers: headers,
      signal: abortController.signal,
    });

    if (response.status >= 200 && response.status < 300) {
      let responseMessage = response.data.choices[0].message;
      return responseMessage;
    }
  } catch (error) {
    return error;
  }
};
export default openAIRequest;
