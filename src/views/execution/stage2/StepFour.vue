<template>
  <div class="text-sm space-y-6">

    <div class="w-full text-left">
      <div class="font-semibold text-sm sm:text-base mb-1">EXECUTION RATE</div>
      <div class="text-xs text-gray-300 mb-3 sm:mb-4 leading-relaxed">
        You executed at a better rate than the previous week. Well done!
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
        <div class="flex flex-row items-center flex-shrink-0">
          <div
            class="bg-[#36e3c1] w-12 h-12 sm:w-16 sm:h-16 flex me-2 items-center justify-center font-bold text-[#222933] text-xl sm:text-2xl flex-shrink-0 overflow-hidden">
            <img src="/bar.png" alt="Logo" class="w-full h-full object-cover" />
          </div>
          <div class="inset-0 flex items-center justify-center">
            <span class="font-bold text-2xl sm:text-3xl text-white">57%</span>
          </div>
        </div>

        <div>
          <div class="flex flex-row items-center flex-shrink-0">
            <div
              class="bg-[#36e3c1] w-10 h-10 sm:w-14 sm:h-14 flex me-3 sm:me-4 items-center justify-center font-bold text-[#222933] text-lg sm:text-2xl flex-shrink-0 overflow-hidden">
              <img src="/uparrow.png" alt="Logo" class="w-full h-full object-cover" />
            </div>
            <div class="flex-col items-center justify-center">
              <span class="font-bold text-xl sm:text-2xl text-white">UP 30%</span>
              <div class="text-xs text-[#a5acad] text-center leading-tight">FROM LAST WEEK</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-xs mb-4">
        <div class="flex flex-col border-l-2 border-[#ffd700] pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">PARTIALLY COMPLETE</span>
          <span class="text-[#a5acad] text-base sm:text-lg font-medium">38%</span>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">RAN OUT OF TIME</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">15%</span>
            <span>
              <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">INCORRECTLY SET</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">17%</span>
            <span>
              <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">DIDN'T WANT TO</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">6%</span>
            <span>
              <img src="/downarrow.png" alt="Down Arrow" class="w-5 h-5 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        <div class="flex flex-col border-l-2 border-[#ffd700] pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">PARTIALLY COMPLETE</span>
          <span class="text-[#a5acad] text-base sm:text-lg font-medium">38%</span>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">RAN OUT OF TIME</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">15%</span>
            <span>
              <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">INCORRECTLY SET</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">17%</span>
            <span>
              <img src="/suparrow.png" alt="Up Arrow" class="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        <div class="flex flex-col pl-2">
          <span class="text-[#ffd700] leading-tight text-xs">DIDN'T WANT TO</span>
          <div class="flex items-center space-x-1 sm:space-x-2">
            <span class="text-[#a5acad] text-base sm:text-lg font-medium">6%</span>
            <span>
              <img src="/downarrow.png" alt="Down Arrow" class="w-5 h-5 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

      </div>
    </div>
    <StepOne />
    <div class="">
      <div class="font-extrabold tracking-wide mb-1">CATEGORIES</div>
      <div class="text-xs text-gray-300 mb-6">
        <span class="underline underline-offset-4 decoration-gray-400">Now let's look at how that looks broken down by
          category</span>
      </div>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-4">
        <div class="flex items-center gap-2">
          <span class="text-2xl">💪</span>
          <span class="text-lg text-gray-100">57%</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-2xl">🚀</span>
          <span class="text-lg text-gray-100 ">33%</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-2xl">🌱</span>
          <span class="text-lg text-gray-100 ">90%</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-2xl">🪙</span>
          <span class="text-lg text-gray-100 ">10%</span>
        </div>

        <div class="flex items-center gap-1">
          <span class="text-2xl">🐶</span>
          <span class="text-lg text-gray-100">50%</span>
        </div>
      </div>
    </div>
    <StepThree />
  </div>
</template>

<script setup>
import StepOne from './StepOne.vue'
import StepThree from './StepThree.vue'

</script>