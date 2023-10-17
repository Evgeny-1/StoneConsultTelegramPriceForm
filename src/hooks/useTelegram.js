const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        userId: tg.initDataUnsafe?.user.id,
        userFirstName: tg.initDataUnsafe.user.first_name,
        userLastName: tg.initDataUnsafe.user.last_name,
        userUserName: tg.initDataUnsafe.user.username
    }
}

