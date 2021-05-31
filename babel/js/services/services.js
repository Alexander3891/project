    'use strict';
    // отправляем данные из формы на сервер
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            // для json файла
            headers: {
                'Content-type': 'application/json'
            },
            body: data // для json файла
        });
        return await res.json();
    };


      // получаем данные для каточек из db.json
      const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
        return await res.json();
    };

    export {postData};
    export {getResource};
