// 打 Emma 網頁機器人後端回應
export async function sendMessageToEmma(message: string, userId: string): Promise<string> {
    try {

        const response = await fetch("https://emma-cloudrun-929071234092.us-west1.run.app/process-message", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_input: message,
                user_id: userId
            }),
        });
        
        const data = await response.json();
        return data;

    } catch (error) {
        return 'Emma 機器人後端 API 請求失敗';
    }
}