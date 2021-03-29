<script>
    import { onMount } from 'svelte';
    import store from './hobby-store';

    let hobbyInput = '';
    let isLoading = false;

    onMount(() => {
        isLoading = true;
        fetch('https://svelte-meetup-application-default-rtdb.firebaseio.com/hobbies.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Fail to get data');
                }
                return response.json();
            })
            .then(data => {
                store.setHobbies(Object.values(data));
                console.log(data);
                isLoading = false;
            }).catch(error => {
                console.log(error);
                isLoading = false;
        });
    });

    function addHobby() {
        isLoading = true;
        fetch('https://svelte-meetup-application-default-rtdb.firebaseio.com/hobbies.json', {
            method: 'POST',
            body: JSON.stringify(hobbyInput.value),
            headers: {
                'Content-Type': 'application/json'
            }}
        ).then(result => {
            if (!result.ok) {
                throw new Error('Fail to get data');
            }
            console.log('Data Saved')
            store.addHobby(hobbyInput.value);
            hobbyInput.value = '';
            isLoading = false;
        }).catch(error => {
            console.log(error);
            isLoading = false;
        });

        
    }

</script>

<style>
    button {
        height: 2rem;
        font-size: 1rem;
    }

    label {
        display: block;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    input {
        height: 2rem;
    }
</style>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
    <p>Loading</p>
{:else}
    <ul>
        {#each $store as hobby}
            <li>
                {hobby}
            </li>
        {/each}
    </ul>
{/if}