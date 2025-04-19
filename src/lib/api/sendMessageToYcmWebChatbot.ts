// 打 YCM 網頁機器人後端回應
export async function sendMessageToYcmWebChatbot(message: string, botSelect: string): Promise<string> {
    const response = await fetch("https://ycm-web-plugin-cloudrun-929071234092.us-west1.run.app/send_message", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            bot_select: botSelect,
        }),
    });

    if (!response.ok) {
        return 'YCM 網頁機器人後端 API 請求失敗';
    }

    const data = await response.json();
    return data.response;
}