export const ILLUSTRATIONS = {
  // Level 1: Butter + Fly = BUTTERFLY
  butter: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Dish/Plate -->
      <ellipse cx="80" cy="120" rx="65" ry="22" fill="#E2E8F0"/>
      <ellipse cx="80" cy="116" rx="60" ry="18" fill="#F8FAFC"/>
      <!-- Butter Block -->
      <path d="M40 95 L65 65 L115 65 L95 95 Z" fill="#FDE047"/>
      <path d="M40 95 L40 108 L95 108 L95 95 Z" fill="#FACC15"/>
      <path d="M95 95 L115 65 L115 78 L95 108 Z" fill="#EAB308"/>
      <!-- Slice Cut & Shine -->
      <path d="M48 90 L70 68 L78 68 L56 90 Z" fill="#FEF08A" opacity="0.6"/>
      <circle cx="85" cy="85" r="3" fill="#FEF08A"/>
    </svg>
  `,
  fly: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Wings -->
      <ellipse cx="60" cy="60" rx="28" ry="18" transform="rotate(-35 60 60)" fill="#BAE6FD" opacity="0.8" stroke="#38BDF8" stroke-width="3"/>
      <ellipse cx="100" cy="60" rx="28" ry="18" transform="rotate(35 100 60)" fill="#BAE6FD" opacity="0.8" stroke="#38BDF8" stroke-width="3"/>
      <!-- Body -->
      <ellipse cx="80" cy="95" rx="16" ry="26" fill="#334155"/>
      <ellipse cx="80" cy="65" rx="14" ry="14" fill="#1E293B"/>
      <!-- Eyes -->
      <circle cx="73" cy="60" r="6" fill="#EF4444"/>
      <circle cx="87" cy="60" r="6" fill="#EF4444"/>
      <circle cx="74" cy="58" r="2" fill="white"/>
      <circle cx="88" cy="58" r="2" fill="white"/>
      <!-- Antennae -->
      <path d="M75 52 Q70 40 64 42" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
      <path d="M85 52 Q90 40 96 42" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
      <!-- Legs -->
      <path d="M64 90 L48 96 M64 105 L50 115 M96 90 L112 96 M96 105 L110 115" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Level 2: Sun + Flower = SUNFLOWER
  sun: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sun Rays -->
      <g stroke="#F59E0B" stroke-width="6" stroke-linecap="round">
        <line x1="80" y1="20" x2="80" y2="35"/>
        <line x1="80" y1="125" x2="80" y2="140"/>
        <line x1="20" y1="80" x2="35" y2="80"/>
        <line x1="125" y1="80" x2="140" y2="80"/>
        <line x1="38" y1="38" x2="49" y2="49"/>
        <line x1="111" y1="111" x2="122" y2="122"/>
        <line x1="38" y1="122" x2="49" y2="111"/>
        <line x1="111" y1="49" x2="122" y2="38"/>
      </g>
      <!-- Sun Core -->
      <circle cx="80" cy="80" r="36" fill="#FBBF24"/>
      <circle cx="80" cy="80" r="32" fill="#FDE047"/>
      <!-- Cute Face -->
      <circle cx="70" cy="76" r="4" fill="#92400E"/>
      <circle cx="90" cy="76" r="4" fill="#92400E"/>
      <path d="M72 87 Q80 95 88 87" stroke="#92400E" stroke-width="3" stroke-linecap="round" fill="none"/>
      <ellipse cx="64" cy="83" rx="4" ry="2" fill="#F87171" opacity="0.6"/>
      <ellipse cx="96" cy="83" rx="4" ry="2" fill="#F87171" opacity="0.6"/>
    </svg>
  `,
  flower: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Stem and Leaves -->
      <path d="M80 80 Q78 120 80 145" stroke="#22C55E" stroke-width="7" stroke-linecap="round"/>
      <path d="M80 115 Q60 110 55 125 Q70 130 80 120" fill="#4ADE80"/>
      <path d="M80 105 Q100 100 105 115 Q90 120 80 110" fill="#4ADE80"/>
      <!-- Petals -->
      <g fill="#F43F5E">
        <circle cx="80" cy="48" r="18"/>
        <circle cx="108" cy="65" r="18"/>
        <circle cx="100" cy="98" r="18"/>
        <circle cx="60" cy="98" r="18"/>
        <circle cx="52" cy="65" r="18"/>
      </g>
      <!-- Center Core -->
      <circle cx="80" cy="75" r="17" fill="#FDE047"/>
      <circle cx="80" cy="75" r="14" fill="#FACC15"/>
    </svg>
  `,

  // Level 3: Rain + Coat = RAINCOAT
  rain: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cloud -->
      <path d="M50 75 A20 20 0 0 1 70 50 A26 26 0 0 1 115 55 A22 22 0 0 1 125 75 A18 18 0 0 1 115 90 L45 90 A18 18 0 0 1 50 75 Z" fill="#94A3B8"/>
      <path d="M50 72 A18 18 0 0 1 68 50 A24 24 0 0 1 110 54 A20 20 0 0 1 120 72 L45 72 Z" fill="#CBD5E1"/>
      <!-- Rain Drops -->
      <g stroke="#38BDF8" stroke-width="4" stroke-linecap="round">
        <line x1="55" y1="105" x2="48" y2="125"/>
        <line x1="75" y1="100" x2="68" y2="120"/>
        <line x1="95" y1="105" x2="88" y2="125"/>
        <line x1="115" y1="100" x2="108" y2="120"/>
        <line x1="65" y1="130" x2="58" y2="148"/>
        <line x1="85" y1="130" x2="78" y2="148"/>
        <line x1="105" y1="130" x2="98" y2="148"/>
      </g>
    </svg>
  `,
  coat: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Yellow Raincoat/Jacket -->
      <path d="M55 45 L80 55 L105 45 L135 75 L118 90 L105 80 L105 135 L55 135 L55 80 L42 90 L25 75 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
      <!-- Collar / Hood -->
      <path d="M65 42 Q80 30 95 42 L80 60 Z" fill="#EAB308"/>
      <!-- Zipper / Buttons -->
      <line x1="80" y1="58" x2="80" y2="135" stroke="#A16207" stroke-width="3" stroke-dasharray="8 6"/>
      <!-- Pockets -->
      <rect x="60" y="98" width="15" height="15" rx="3" fill="#EAB308"/>
      <rect x="85" y="98" width="15" height="15" rx="3" fill="#EAB308"/>
    </svg>
  `,

  // Level 4: Tooth + Brush = TOOTHBRUSH
  tooth: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 45 C45 30 70 25 80 30 C90 25 115 30 110 45 C105 60 115 90 100 130 C95 140 85 140 85 115 C85 95 75 95 75 115 C75 140 65 140 60 130 C45 90 55 60 50 45 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="4"/>
      <!-- Sparkle -->
      <path d="M115 30 L118 38 L126 41 L118 44 L115 52 L112 44 L104 41 L112 38 Z" fill="#38BDF8"/>
      <ellipse cx="68" cy="55" rx="6" ry="12" fill="#FFFFFF"/>
    </svg>
  `,
  brush: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Brush Wooden/Color Handle -->
      <path d="M125 25 C132 32 132 40 125 47 L65 107 L45 87 L105 27 C112 20 118 20 125 25 Z" fill="#F59E0B" stroke="#D97706" stroke-width="3"/>
      <!-- Metal Ferrule -->
      <path d="M65 107 L45 87 L35 97 L55 117 Z" fill="#94A3B8" stroke="#64748B" stroke-width="2"/>
      <!-- Bristles Fan -->
      <path d="M35 97 L55 117 L30 142 C20 145 15 140 18 130 Z" fill="#EC4899" stroke="#BE185D" stroke-width="2"/>
      <path d="M24 112 L44 132" stroke="#FDA4AF" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 106 L50 126" stroke="#FDA4AF" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Level 5: Horse + Shoe = HORSESHOE
  horse: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Horse Head Silhouette -->
      <path d="M55 130 L65 95 L55 80 L60 55 L85 40 L95 40 L90 55 L115 80 L110 105 L95 110 L95 130 Z" fill="#B45309"/>
      <!-- Mane -->
      <path d="M58 55 Q45 70 48 95 Q40 105 45 125" stroke="#78350F" stroke-width="8" stroke-linecap="round"/>
      <!-- Ear -->
      <path d="M85 40 L90 25 L98 40 Z" fill="#92400E"/>
      <!-- Eye & Snout -->
      <circle cx="85" cy="65" r="4" fill="#1E293B"/>
      <circle cx="108" cy="98" r="3" fill="#78350F"/>
    </svg>
  `,
  shoe: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sneaker / Shoe -->
      <path d="M30 105 C30 90 45 80 65 80 L90 75 C105 60 120 70 125 90 L135 105 L135 120 L30 120 Z" fill="#EF4444" stroke="#B91C1C" stroke-width="3"/>
      <path d="M25 120 L140 120 L140 128 L25 128 Z" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>
      <!-- Toe Cap & Laces -->
      <path d="M115 90 C125 90 135 98 135 115 L115 115 Z" fill="#FFFFFF"/>
      <line x1="75" y1="82" x2="88" y2="92" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <line x1="82" y1="78" x2="95" y2="88" stroke="white" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Level 6: Cow + Boy = COWBOY
  cow: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cow Head -->
      <ellipse cx="80" cy="85" rx="42" ry="38" fill="#F8FAFC" stroke="#334155" stroke-width="3"/>
      <!-- Horns -->
      <path d="M50 60 Q40 40 30 45" stroke="#FBBF24" stroke-width="6" stroke-linecap="round"/>
      <path d="M110 60 Q120 40 130 45" stroke="#FBBF24" stroke-width="6" stroke-linecap="round"/>
      <!-- Ears -->
      <ellipse cx="40" cy="70" rx="14" ry="8" transform="rotate(-20 40 70)" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
      <ellipse cx="120" cy="70" rx="14" ry="8" transform="rotate(20 120 70)" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
      <!-- Black Spot -->
      <path d="M60 55 C55 70 70 75 75 60 C75 52 65 50 60 55 Z" fill="#1E293B"/>
      <!-- Snout -->
      <ellipse cx="80" cy="100" rx="28" ry="18" fill="#F472B6"/>
      <circle cx="70" cy="100" r="3" fill="#831843"/>
      <circle cx="90" cy="100" r="3" fill="#831843"/>
      <!-- Eyes -->
      <circle cx="65" cy="78" r="4" fill="#1E293B"/>
      <circle cx="95" cy="78" r="4" fill="#1E293B"/>
    </svg>
  `,
  boy: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Boy Face -->
      <circle cx="80" cy="82" r="35" fill="#FED7AA"/>
      <!-- Hair -->
      <path d="M45 75 C45 45 60 40 80 40 C100 40 115 45 115 75 C105 60 95 62 85 58 C75 62 60 58 45 75 Z" fill="#78350F"/>
      <!-- Eyes & Smile -->
      <circle cx="68" cy="80" r="4" fill="#1E293B"/>
      <circle cx="92" cy="80" r="4" fill="#1E293B"/>
      <path d="M72 95 Q80 102 88 95" stroke="#9A3412" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Shirt Collar -->
      <path d="M55 125 Q80 135 105 125 L115 145 L45 145 Z" fill="#3B82F6"/>
    </svg>
  `,

  // Level 7: Fire + Fly = FIREFLY
  fire: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Flame -->
      <path d="M80 25 C95 50 120 75 120 105 C120 128 102 142 80 142 C58 142 40 128 40 105 C40 80 60 60 70 45 C75 60 85 65 80 25 Z" fill="#EA580C"/>
      <!-- Inner Flame -->
      <path d="M80 60 C90 80 105 95 105 115 C105 130 94 138 80 138 C66 138 55 130 55 115 C55 98 70 85 75 75 C78 85 85 88 80 60 Z" fill="#FACC15"/>
      <!-- Core Spark -->
      <ellipse cx="80" cy="120" rx="12" ry="14" fill="#FEF08A"/>
    </svg>
  `,

  // Level 8: Sea + Shell = SEASHELL
  sea: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ocean Waves -->
      <path d="M20 70 Q40 50 60 70 T100 70 T140 70 L140 135 L20 135 Z" fill="#0284C7"/>
      <path d="M20 90 Q40 70 60 90 T100 90 T140 90 L140 135 L20 135 Z" fill="#0369A1"/>
      <path d="M20 110 Q40 95 60 110 T100 110 T140 110 L140 135 L20 135 Z" fill="#075985"/>
      <!-- White Caps / Foam -->
      <circle cx="58" cy="70" r="5" fill="#E0F2FE"/>
      <circle cx="98" cy="70" r="5" fill="#E0F2FE"/>
      <circle cx="138" cy="70" r="5" fill="#E0F2FE"/>
    </svg>
  `,
  shell: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Seashell -->
      <path d="M80 135 L60 120 C35 95 40 55 80 50 C120 55 125 95 100 120 Z" fill="#F472B6" stroke="#DB2777" stroke-width="3"/>
      <!-- Shell Ridges -->
      <path d="M80 135 L80 50" stroke="#FBCFE8" stroke-width="3"/>
      <path d="M80 135 L55 60" stroke="#FBCFE8" stroke-width="3"/>
      <path d="M80 135 L105 60" stroke="#FBCFE8" stroke-width="3"/>
      <path d="M80 135 L40 75" stroke="#FBCFE8" stroke-width="3"/>
      <path d="M80 135 L120 75" stroke="#FBCFE8" stroke-width="3"/>
    </svg>
  `,

  // Level 9: Foot + Ball = FOOTBALL
  foot: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Bare Foot / Footprint -->
      <path d="M60 40 L60 95 C60 120 75 130 95 130 C115 130 125 115 125 95 C125 75 110 65 95 65 L95 40 Z" fill="#FED7AA" stroke="#F97316" stroke-width="3"/>
      <!-- Toes -->
      <circle cx="118" cy="70" r="8" fill="#FED7AA" stroke="#F97316" stroke-width="2"/>
      <circle cx="118" cy="88" r="7" fill="#FED7AA" stroke="#F97316" stroke-width="2"/>
      <circle cx="118" cy="103" r="6" fill="#FED7AA" stroke="#F97316" stroke-width="2"/>
      <circle cx="115" cy="116" r="5" fill="#FED7AA" stroke="#F97316" stroke-width="2"/>
    </svg>
  `,
  ball: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Classic Soccer Ball -->
      <circle cx="80" cy="80" r="48" fill="#F8FAFC" stroke="#1E293B" stroke-width="4"/>
      <!-- Pentagons / Patterns -->
      <polygon points="80,62 94,72 89,88 71,88 66,72" fill="#1E293B"/>
      <line x1="80" y1="62" x2="80" y2="34" stroke="#1E293B" stroke-width="3"/>
      <line x1="94" y1="72" x2="120" y2="60" stroke="#1E293B" stroke-width="3"/>
      <line x1="89" y1="88" x2="108" y2="114" stroke="#1E293B" stroke-width="3"/>
      <line x1="71" y1="88" x2="52" y2="114" stroke="#1E293B" stroke-width="3"/>
      <line x1="66" y1="72" x2="40" y2="60" stroke="#1E293B" stroke-width="3"/>
    </svg>
  `,

  // Level 10: Basket + Ball = BASKETBALL
  basket: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Woven Basket -->
      <path d="M40 75 L120 75 L110 130 L50 130 Z" fill="#D97706" stroke="#92400E" stroke-width="3"/>
      <!-- Handle -->
      <path d="M45 75 C45 35 115 35 115 75" stroke="#B45309" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Woven Pattern -->
      <line x1="55" y1="75" x2="62" y2="130" stroke="#B45309" stroke-width="3"/>
      <line x1="75" y1="75" x2="78" y2="130" stroke="#B45309" stroke-width="3"/>
      <line x1="95" y1="75" x2="94" y2="130" stroke="#B45309" stroke-width="3"/>
      <line x1="43" y1="95" x2="117" y2="95" stroke="#92400E" stroke-width="3"/>
      <line x1="47" y1="112" x2="113" y2="112" stroke="#92400E" stroke-width="3"/>
    </svg>
  `,

  // Level 11: Tooth + Paste = TOOTHPASTE
  paste: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Toothpaste Tube -->
      <path d="M45 130 L115 130 L105 60 L55 60 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
      <!-- Cap -->
      <rect x="68" y="45" width="24" height="15" rx="3" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>
      <!-- Paste Swirl Squirt -->
      <path d="M80 45 Q70 25 90 25 Q110 25 105 38" stroke="#EC4899" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M80 45 Q70 25 90 25 Q110 25 105 38" stroke="#F472B6" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>
  `,

  // Level 12: Pop + Corn = POPCORN
  pop: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Comic Pop Burst -->
      <polygon points="80,25 98,52 130,45 118,75 145,95 115,108 122,138 92,125 75,145 68,120 38,132 48,102 20,88 48,72 35,42 68,52" fill="#FBBF24" stroke="#D97706" stroke-width="4"/>
      <polygon points="80,45 92,62 112,58 105,78 122,92 102,100 108,120 88,110 75,124 70,108 50,115 58,95 38,85 58,75 48,55 70,62" fill="#FEF08A"/>
      <circle cx="80" cy="85" r="8" fill="#EF4444"/>
    </svg>
  `,
  corn: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Corn Cob -->
      <ellipse cx="80" cy="80" rx="22" ry="45" transform="rotate(-20 80 80)" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
      <!-- Corn Kernels Grid -->
      <circle cx="75" cy="65" r="4" fill="#EAB308"/>
      <circle cx="88" cy="70" r="4" fill="#EAB308"/>
      <circle cx="70" cy="82" r="4" fill="#EAB308"/>
      <circle cx="83" cy="86" r="4" fill="#EAB308"/>
      <circle cx="76" cy="100" r="4" fill="#EAB308"/>
      <!-- Husk Leaves -->
      <path d="M60 120 Q50 80 40 60 Q55 90 70 125 Z" fill="#4ADE80" stroke="#16A34A" stroke-width="2"/>
      <path d="M90 125 Q115 95 125 70 Q110 95 85 130 Z" fill="#22C55E" stroke="#16A34A" stroke-width="2"/>
    </svg>
  `,

  // Level 13: Rain + Bow = RAINBOW
  bow: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Archery Bow -->
      <path d="M50 30 Q120 80 50 130" stroke="#92400E" stroke-width="7" stroke-linecap="round" fill="none"/>
      <line x1="50" y1="30" x2="50" y2="130" stroke="#94A3B8" stroke-width="2"/>
      <line x1="30" y1="80" x2="110" y2="80" stroke="#D97706" stroke-width="3"/>
      <polygon points="110,75 125,80 110,85" fill="#EF4444"/>
      <path d="M35 73 L25 80 L35 87" stroke="#3B82F6" stroke-width="3"/>
    </svg>
  `,

  // Level 14: Birth + Day = BIRTHDAY
  birth: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Baby in Swaddle -->
      <ellipse cx="80" cy="95" rx="35" ry="42" fill="#93C5FD"/>
      <path d="M52 80 Q80 110 108 80" stroke="#60A5FA" stroke-width="4" fill="none"/>
      <path d="M52 105 Q80 135 108 105" stroke="#60A5FA" stroke-width="4" fill="none"/>
      <circle cx="80" cy="55" r="24" fill="#FED7AA"/>
      <circle cx="72" cy="52" r="3" fill="#1E293B"/>
      <circle cx="88" cy="52" r="3" fill="#1E293B"/>
      <path d="M76 62 Q80 66 84 62" stroke="#9A3412" stroke-width="2" stroke-linecap="round" fill="none"/>
      <ellipse cx="67" cy="56" rx="3" ry="2" fill="#F472B6"/>
      <ellipse cx="93" cy="56" rx="3" ry="2" fill="#F472B6"/>
    </svg>
  `,
  day: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Calendar / Daylight -->
      <rect x="35" y="45" width="90" height="85" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
      <path d="M35 57 C35 50 40 45 47 45 L113 45 C120 45 125 50 125 57 L125 70 L35 70 Z" fill="#EF4444"/>
      <circle cx="55" cy="42" r="4" fill="#94A3B8"/>
      <circle cx="105" cy="42" r="4" fill="#94A3B8"/>
      <circle cx="80" cy="98" r="14" fill="#FBBF24"/>
      <line x1="80" y1="78" x2="80" y2="82" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <line x1="80" y1="114" x2="80" y2="118" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="98" x2="64" y2="98" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <line x1="96" y1="98" x2="100" y2="98" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Level 15: Bed + Bug = BEDBUG
  bed: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Bed Frame -->
      <rect x="25" y="55" width="16" height="75" rx="4" fill="#78350F"/>
      <rect x="125" y="75" width="14" height="55" rx="4" fill="#78350F"/>
      <rect x="40" y="80" width="90" height="30" rx="6" fill="#3B82F6"/>
      <path d="M40 85 L90 85 L90 110 L40 110 Z" fill="#93C5FD"/>
      <rect x="42" y="70" width="28" height="15" rx="5" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
    </svg>
  `,
  bug: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ladybug / Beetle Body -->
      <ellipse cx="80" cy="90" rx="35" ry="40" fill="#EF4444" stroke="#1E293B" stroke-width="3"/>
      <path d="M60 55 C60 40 100 40 100 55 Z" fill="#1E293B"/>
      <circle cx="65" cy="80" r="7" fill="#1E293B"/>
      <circle cx="95" cy="80" r="7" fill="#1E293B"/>
      <circle cx="70" cy="108" r="6" fill="#1E293B"/>
      <circle cx="90" cy="108" r="6" fill="#1E293B"/>
      <line x1="80" y1="55" x2="80" y2="130" stroke="#1E293B" stroke-width="3"/>
      <path d="M70 42 Q60 25 50 30" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
      <path d="M90 42 Q100 25 110 30" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Level 16: Moon + Light = MOONLIGHT
  moon: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Crescent Moon -->
      <path d="M100 30 C60 35 45 75 55 110 C65 135 95 140 115 130 C80 120 70 80 100 30 Z" fill="#FACC15" stroke="#EAB308" stroke-width="3"/>
      <circle cx="115" cy="50" r="3" fill="#FDE047"/>
      <circle cx="125" cy="80" r="4" fill="#FDE047"/>
      <circle cx="110" cy="110" r="2.5" fill="#FDE047"/>
    </svg>
  `,
  light: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Light Bulb -->
      <path d="M60 70 C60 45 100 45 100 70 C100 85 92 92 90 105 L70 105 C68 92 60 85 60 70 Z" fill="#FEF08A" stroke="#F59E0B" stroke-width="3"/>
      <rect x="70" y="105" width="20" height="15" rx="3" fill="#94A3B8"/>
      <line x1="72" y1="110" x2="88" y2="110" stroke="#64748B" stroke-width="2"/>
      <line x1="72" y1="115" x2="88" y2="115" stroke="#64748B" stroke-width="2"/>
      <line x1="80" y1="25" x2="80" y2="38" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="45" x2="50" y2="55" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
      <line x1="120" y1="45" x2="110" y2="55" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="75" x2="44" y2="75" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
      <line x1="130" y1="75" x2="116" y2="75" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,

  // Level 17: Star + Fish = STARFISH
  star: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,25 96,65 140,68 105,96 117,138 80,115 43,138 55,96 20,68 64,65" fill="#FBBF24" stroke="#F59E0B" stroke-width="4"/>
      <circle cx="73" cy="80" r="4" fill="#78350F"/>
      <circle cx="87" cy="80" r="4" fill="#78350F"/>
      <path d="M75 90 Q80 96 85 90" stroke="#78350F" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  fish: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Blue Fish Body -->
      <path d="M125 80 C110 50 60 50 35 80 C60 110 110 110 125 80 Z" fill="#0EA5E9" stroke="#0284C7" stroke-width="3"/>
      <polygon points="35,80 15,55 20,80 15,105" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
      <path d="M75 58 Q85 40 95 58 Z" fill="#38BDF8"/>
      <circle cx="108" cy="74" r="5" fill="white"/>
      <circle cx="110" cy="74" r="3" fill="#1E293B"/>
      <path d="M80 75 Q75 80 80 85 M70 70 Q65 75 70 80" stroke="#BAE6FD" stroke-width="2.5" fill="none"/>
    </svg>
  `,

  // Level 18: Gold + Fish = GOLDFISH
  gold: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Gold Coin Stack -->
      <ellipse cx="80" cy="115" rx="42" ry="18" fill="#D97706"/>
      <ellipse cx="80" cy="110" rx="42" ry="18" fill="#F59E0B"/>
      <ellipse cx="80" cy="90" rx="42" ry="18" fill="#D97706"/>
      <ellipse cx="80" cy="85" rx="42" ry="18" fill="#F59E0B"/>
      <ellipse cx="80" cy="65" rx="42" ry="18" fill="#D97706"/>
      <ellipse cx="80" cy="60" rx="42" ry="18" fill="#FDE047"/>
      <text x="80" y="68" font-size="24" font-weight="900" text-anchor="middle" fill="#B45309">$</text>
    </svg>
  `,

  // Level 19: Dragon + Fly = DRAGONFLY
  dragon: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Dragon Head -->
      <path d="M50 120 L40 85 L65 50 L105 50 L120 70 L135 80 L115 95 L95 90 L85 120 Z" fill="#10B981" stroke="#047857" stroke-width="3"/>
      <polygon points="65,50 60,30 75,45" fill="#F59E0B"/>
      <polygon points="90,45 95,25 105,48" fill="#F59E0B"/>
      <circle cx="85" cy="65" r="7" fill="#FEF08A"/>
      <circle cx="87" cy="65" r="3" fill="#1E293B"/>
      <circle cx="125" cy="80" r="3" fill="#047857"/>
      <path d="M128 85 Q145 80 148 95" stroke="#EF4444" stroke-width="4" stroke-linecap="round" fill="none"/>
    </svg>
  `,

  // Level 20: Snow + Man = SNOWMAN
  snow: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Snowflake Crystal -->
      <g stroke="#38BDF8" stroke-width="5" stroke-linecap="round">
        <line x1="80" y1="25" x2="80" y2="135"/>
        <line x1="25" y1="80" x2="135" y2="80"/>
        <line x1="41" y1="41" x2="119" y2="119"/>
        <line x1="41" y1="119" x2="119" y2="41"/>
        <path d="M70 45 L80 35 L90 45 M70 115 L80 125 L90 115" fill="none"/>
        <path d="M45 70 L35 80 L45 90 M115 70 L125 80 L115 90" fill="none"/>
      </g>
      <circle cx="80" cy="80" r="10" fill="#E0F2FE" stroke="#0284C7" stroke-width="3"/>
    </svg>
  `,
  man: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Adult Man / Person -->
      <circle cx="80" cy="65" r="28" fill="#FED7AA"/>
      <path d="M52 65 C52 40 70 35 80 35 C95 35 108 40 108 65 C100 50 90 52 80 50 C70 52 60 50 52 65 Z" fill="#334155"/>
      <path d="M68 78 Q80 84 92 78" stroke="#475569" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="70" cy="62" r="3.5" fill="#1E293B"/>
      <circle cx="90" cy="62" r="3.5" fill="#1E293B"/>
      <path d="M45 115 C45 98 60 95 80 95 C100 95 115 98 115 115 L120 145 L40 145 Z" fill="#475569"/>
      <polygon points="80,95 73,115 80,135 87,115" fill="#EF4444"/>
    </svg>
  `,

  // Level 21: Brain + Storm = BRAINSTORM
  brain: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Brain Organ -->
      <path d="M78 40 C60 40 45 55 45 75 C45 85 50 95 45 105 C40 115 50 128 65 125 C72 125 75 120 78 120 Z" fill="#F472B6" stroke="#DB2777" stroke-width="3"/>
      <path d="M82 40 C100 40 115 55 115 75 C115 85 110 95 115 105 C120 115 110 128 95 125 C88 125 85 120 82 120 Z" fill="#F472B6" stroke="#DB2777" stroke-width="3"/>
      <path d="M55 70 Q70 65 65 85 Q75 95 60 105" stroke="#BE185D" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M105 70 Q90 65 95 85 Q85 95 100 105" stroke="#BE185D" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  storm: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark Storm Cloud -->
      <path d="M45 75 A20 20 0 0 1 68 50 A26 26 0 0 1 115 55 A22 22 0 0 1 125 75 L45 75 Z" fill="#475569"/>
      <!-- Lightning Bolt -->
      <polygon points="85,70 65,100 80,100 70,135 100,92 82,92" fill="#FACC15" stroke="#EAB308" stroke-width="2"/>
    </svg>
  `,

  // Level 22: Bird + House = BIRDHOUSE
  bird: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 95 C40 65 75 55 105 60 C115 62 125 55 130 50 C128 65 120 75 115 80 C110 105 80 115 50 110 L30 120 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
      <path d="M60 85 C75 80 90 85 85 100 C75 105 60 98 60 85 Z" fill="#0284C7"/>
      <polygon points="120,68 135,72 120,78" fill="#F59E0B"/>
      <circle cx="105" cy="70" r="3.5" fill="#1E293B"/>
    </svg>
  `,
  house: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,30 30,75 130,75" fill="#DC2626" stroke="#991B1B" stroke-width="3"/>
      <rect x="42" y="75" width="76" height="60" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <rect x="68" y="95" width="24" height="40" rx="3" fill="#B45309"/>
      <circle cx="86" cy="115" r="2.5" fill="#FDE047"/>
      <rect x="95" y="85" width="16" height="16" rx="2" fill="#38BDF8"/>
    </svg>
  `,

  // Level 23: Book + Worm = BOOKWORM
  book: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 125 C65 115 40 115 25 120 L25 55 C40 50 65 50 80 60 C95 50 120 50 135 55 L135 120 C120 115 95 115 80 125 Z" fill="#F8FAFC" stroke="#3B82F6" stroke-width="4"/>
      <path d="M80 130 C65 120 38 120 22 125 L22 120 M80 130 C95 120 122 120 138 125 L138 120" stroke="#1D4ED8" stroke-width="5"/>
      <line x1="38" y1="72" x2="68" y2="70" stroke="#94A3B8" stroke-width="2.5"/>
      <line x1="38" y1="85" x2="68" y2="83" stroke="#94A3B8" stroke-width="2.5"/>
      <line x1="92" y1="70" x2="122" y2="72" stroke="#94A3B8" stroke-width="2.5"/>
      <line x1="92" y1="83" x2="122" y2="85" stroke="#94A3B8" stroke-width="2.5"/>
    </svg>
  `,
  worm: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 115 Q50 85 65 115 Q80 135 95 105 Q110 75 125 90" stroke="#EC4899" stroke-width="14" stroke-linecap="round" fill="none"/>
      <circle cx="125" cy="90" r="10" fill="#F472B6"/>
      <circle cx="128" cy="87" r="2.5" fill="#1E293B"/>
      <circle cx="126" cy="88" r="5" fill="none" stroke="#1E293B" stroke-width="2"/>
    </svg>
  `,

  // Level 24: Cup + Cake = CUPCAKE
  cup: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 55 L105 55 C105 95 95 115 75 115 C55 115 45 95 45 55 Z" fill="#F8FAFC" stroke="#0284C7" stroke-width="4"/>
      <path d="M105 65 C125 65 125 100 100 100" stroke="#0284C7" stroke-width="5" stroke-linecap="round" fill="none"/>
      <ellipse cx="75" cy="122" rx="45" ry="8" fill="#E2E8F0" stroke="#0284C7" stroke-width="3"/>
      <path d="M65 42 Q60 30 70 20 M85 42 Q90 30 80 20" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  cake: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 110 L80 60 L135 75 L95 125 Z" fill="#FDE047" stroke="#CA8A04" stroke-width="3"/>
      <path d="M35 110 L35 125 L95 140 L95 125 Z" fill="#EAB308"/>
      <path d="M35 110 L80 60 L135 75 L125 85 L80 72 L35 110 Z" fill="#F43F5E"/>
      <circle cx="80" cy="55" r="10" fill="#EF4444"/>
      <polygon points="80,45 76,40 84,40" fill="#22C55E"/>
    </svg>
  `,

  // Level 25: Straw + Berry = STRAWBERRY
  straw: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="120" rx="35" ry="12" fill="#E2E8F0"/>
      <path d="M60 125 L95 40 L115 32" stroke="#EF4444" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M60 125 L95 40 L115 32" stroke="#FFFFFF" stroke-width="12" stroke-dasharray="10 10" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  berry: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65" cy="95" r="22" fill="#6366F1" stroke="#4338CA" stroke-width="3"/>
      <circle cx="95" cy="95" r="22" fill="#4F46E5" stroke="#3730A3" stroke-width="3"/>
      <circle cx="80" cy="72" r="24" fill="#818CF8" stroke="#4338CA" stroke-width="3"/>
      <polygon points="80,50 75,58 85,58" fill="#312E81"/>
      <polygon points="65,75 60,82 70,82" fill="#312E81"/>
      <polygon points="95,75 90,82 100,82" fill="#312E81"/>
    </svg>
  `,

  // Level 26: Pan + Cake = PANCAKE
  pan: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="85" rx="42" ry="28" fill="#334155" stroke="#1E293B" stroke-width="4"/>
      <ellipse cx="70" cy="82" rx="36" ry="22" fill="#475569"/>
      <path d="M105 95 L145 115" stroke="#1E293B" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="68" cy="82" rx="14" ry="9" fill="#F8FAFC"/>
      <circle cx="68" cy="82" r="6" fill="#FBBF24"/>
    </svg>
  `,

  // Level 27: Ear + Ring = EARRING
  ear: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 40 C95 35 115 65 105 105 C98 130 75 135 65 120 C55 105 70 100 70 85 C70 65 55 55 60 40 Z" fill="#FED7AA" stroke="#EA580C" stroke-width="3"/>
      <path d="M80 65 C88 75 85 95 75 95" stroke="#EA580C" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>
  `,
  ring: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="95" rx="38" ry="32" fill="none" stroke="#F59E0B" stroke-width="9"/>
      <ellipse cx="80" cy="95" rx="38" ry="32" fill="none" stroke="#FDE047" stroke-width="4"/>
      <polygon points="80,38 95,52 80,68 65,52" fill="#67E8F9" stroke="#0891B2" stroke-width="2"/>
      <polygon points="80,38 88,52 80,68 72,52" fill="#A5F3FC"/>
    </svg>
  `,

  // Level 28: Tree + House = TREEHOUSE
  tree: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="72" y="90" width="16" height="45" rx="3" fill="#78350F"/>
      <circle cx="80" cy="60" r="30" fill="#22C55E"/>
      <circle cx="60" cy="75" r="24" fill="#16A34A"/>
      <circle cx="100" cy="75" r="24" fill="#16A34A"/>
      <circle cx="80" cy="45" r="22" fill="#4ADE80"/>
    </svg>
  `,

  // Level 29: Candle + Light = CANDLELIGHT
  candle: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="62" y="70" width="36" height="65" rx="4" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
      <path d="M68 70 L68 85 M82 70 L82 80" stroke="#FDE68A" stroke-width="4" stroke-linecap="round"/>
      <line x1="80" y1="70" x2="80" y2="58" stroke="#1E293B" stroke-width="3"/>
      <path d="M80 32 C88 42 92 50 80 58 C68 50 72 42 80 32 Z" fill="#F59E0B"/>
      <circle cx="80" cy="50" r="4" fill="#FEF08A"/>
    </svg>
  `,

  // Level 30: Lip + Stick = LIPSTICK
  lip: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 85 C45 70 65 65 80 75 C95 65 115 70 130 85 C115 105 95 115 80 112 C65 115 45 105 30 85 Z" fill="#E11D48" stroke="#9F1239" stroke-width="3"/>
      <path d="M35 85 Q80 95 125 85" stroke="#881337" stroke-width="3" fill="none"/>
    </svg>
  `,
  stick: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 125 L120 45" stroke="#78350F" stroke-width="12" stroke-linecap="round"/>
      <path d="M80 85 L95 75" stroke="#78350F" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="98" cy="72" rx="7" ry="4" transform="rotate(-30 98 72)" fill="#22C55E"/>
    </svg>
  `,

  // Special Combined Badges for Victory & Level Complete
  successCrown: `
    <svg viewBox="0 0 120 120" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,25 75,55 105,40 92,85 28,85 15,40 45,55" fill="#FBBF24" stroke="#D97706" stroke-width="3"/>
      <circle cx="15" cy="40" r="5" fill="#EF4444"/>
      <circle cx="60" cy="25" r="6" fill="#3B82F6"/>
      <circle cx="105" cy="40" r="5" fill="#10B981"/>
    </svg>
  `,
  trophy: `
    <svg viewBox="0 0 160 160" class="svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 45 L112 45 L102 95 C98 110 62 110 58 95 Z" fill="#FBBF24" stroke="#D97706" stroke-width="4"/>
      <!-- Handles -->
      <path d="M48 55 C28 55 28 85 52 85" stroke="#F59E0B" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M112 55 C132 55 132 85 108 85" stroke="#F59E0B" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Base & Stem -->
      <rect x="74" y="105" width="12" height="20" fill="#D97706"/>
      <rect x="50" y="125" width="60" height="15" rx="4" fill="#78350F" stroke="#92400E" stroke-width="2"/>
      <!-- Star on Cup -->
      <polygon points="80,62 84,72 95,72 86,79 89,89 80,83 71,89 74,79 65,72 76,72" fill="#FEF08A"/>
    </svg>
  `
};
