import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-hero-about',
  template: `<div class="relative">
  <section class="max-w-boxed-md mx-auto px-5 md:h-screen">
    <div class="flex flex-col gap-12 py-60px text-center md:h-full md:justify-center">
      <!-- main description -->
      <div class="flex flex-col gap-10 mx-auto md:max-w-boxed-sm">
        <div class="flex flex-col gap-1">
          <span class="text-gray-500 text-lg">Meet the Founders and Partners</span>
          <h1 class="font-bold text-2xl text-gray-900 lg:text-3xl">About Us</h1>
        </div>
        <p class="opacity-80 text-base text-gray-500 lg:text-xl">
          Our founding team started their journeys in the corporate world. They then moved on to build their own startups before coming
          together to form Altar.io. This experience has made André, Daniel, Paolo and João lean by nature. They studied lean product
          development through building startups from the ground up with very few resources.
        </p>
      </div>
    </div>
    <!-- decoration assets -->
    <img
      src="https://raw.githubusercontent.com/marianaivs/angular-bktjab/main/assets/shape-squares.png"
      class="absolute aria-hidden bottom-0 hidden inset-y-1/2 w-[280px] -right-1/2 md:flex md:-right-1/2 md:-top-2/3 md:w-3/4 -z-10"
    />
    <img
      src="https://raw.githubusercontent.com/marianaivs/angular-bktjab/main/assets/shape-square.png"
      class="absolute aria-hidden bottom-0 hidden -left-1/4 w-[148px] md:-left-[17%] md:w-1/4 md:-bottom-1/5 md:flex -z-10"
    />
  </section>
</div>
`,
  styleUrls: ['./section-hero-about.component.css'],
})
export class SectionHeroAboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
