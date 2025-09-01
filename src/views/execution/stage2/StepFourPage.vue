<template>
  <div class="flex items-center justify-center bg-white p-3 sm:p-6 md:p-[30px]">
    <div class="bg-[#30333C] text-white rounded-xl w-full max-w-3xl shadow-2xl p-4 sm:p-6 md:p-[30px]">
      <div class="flex items-center gap-3 px-3 sm:px-6 pt-3 sm:pt-[20px]">
        <div
          class="bg-[#36e3c1]  w-10 h-10 flex items-center justify-center font-bold text-[#222933] text-2xl flex-shrink-0 overflow-hidden">
          <img src="/logo.png" alt="Logo" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-lg leading-tight">AVA'S WEEKLY REPORT</div>
          <div class="text-[#36e3c1] text-sm leading-tight">Let's take a moment to consider how your week went.</div>
        </div>
      </div>
      <div class="px-3 sm:px-6 py-3 sm:py-5">
        <StepFour />
      </div>
    </div>
  </div>
</template>

<script setup>
import StepFour from './StepFour.vue'
</script>
