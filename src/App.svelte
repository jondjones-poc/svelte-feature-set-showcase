<script>
  import Button from './UI/Button.svelte'
  import State from './State.svelte';
  import TransitionExample from './Animation/TransitionExample.svelte';
  import SpringExample from './Animation/SpringExample.svelte';
  import Database from './Database/Database.svelte';

  let showState = false;
  let showTransition = false;
  let showSpring = false;
  let showDatabase = true;

  function toogleState() {
    showState = !showState;
    console.log('toogleState');
  }

  function toogleTransition() {
    showTransition = !showTransition;
    console.log('toogleTransition'); 
  }

  function toogleSpring() {
    showSpring = !showSpring;
    console.log('toogleSpring');
  }

  function toogleDatabase() {
    showDatabase = !showDatabase;
    console.log('toogleDatabase');
  }
</script>

<style>
  .container {
    display: block;
    width: 100vw;
    margin: 1rem;
    padding: 1 rem;
  }

</style>

<div class="container">
  <Button on:click={toogleState}>
    Show State Examples
  </Button>
  <Button on:click={toogleTransition}>
    Show Transition Examples
  </Button>
  <Button on:click={toogleSpring}>
    Show Spring Examples
  </Button>
  <Button on:click={toogleDatabase}>
    Show Database/AJAX Examples
  </Button>
</div>
<div class="container">
  {#if showState}
    <State />
  {/if}
  {#if showTransition}
    <TransitionExample />
  {/if}
  {#if showSpring}
    <SpringExample />
  {/if}
  {#if showDatabase}
    <Database />
{/if}
</div>