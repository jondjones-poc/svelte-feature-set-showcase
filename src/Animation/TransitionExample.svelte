<script>
    import { tweened } from 'svelte/motion'
    import { cubicIn } from 'svelte/easing';
    import { fade, fly, slide, scale } from 'svelte/transition';
  
    const progress = tweened(0, {
      delay: 0,
      duratrion: 700, 
      easing: cubicIn
    });
  
    setTimeout(() => {
      progress.set(0.5)
    }, 1500)
  
    let boxInput;
    let boxes = [];
  
    function addBox() {
      boxes = [...boxes, boxInput.value]
    }
  
    function deleteBox(event){
      boxes = boxes.filter(item => item != event);
    }
  
  </script>
  
  <style>

    progress {
      height: 4rem;
    }
    .box {
      width: 10rem;
      height: 10rem;
      background: seashell;
      margin: 1rem;
      box-shadow: 0 2px 8px rgb(0, 0, 0, 0.25);
      border-radius: 5px;
      padding: 1rem;
    }

</style>

<div>
  <div>
    <progress value={$progress} ></progress>
  </div>
  <div>
    <input type="text" bind:this={boxInput} />
    <button on:click={addBox}>Add</button>
    {#each boxes as box} 
      <div
      transition:fly={{easing: cubicIn, x: 300, y: 0}} 
      class:box
      on:click={deleteBox.bind(this, box)}>
        {box}
      </div>
    {/each}
  </div>
</div>
