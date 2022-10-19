const $form = document.querySelector('#form')
        const $buttonMailto = document.querySelector('#contacta')

        $form.addEventListener('submit', handleSubmit)

        function handleSubmit (event) {
            event.preventDefault()
            const form = new FormData (this)
            $buttonMailto.setAttribute('href', `mailto:lylezcano@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
            $buttonMailto.click()
        }