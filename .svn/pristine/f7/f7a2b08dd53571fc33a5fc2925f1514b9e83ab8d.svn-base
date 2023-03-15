import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  uid;

  landingPageHeading: string;
  breadCrumbHead;
  breadCrumbSecond;
  breadCrumbThird;
  breadCrumbForth = new BehaviorSubject<any>([]);

  pageMenus = new BehaviorSubject<any>([]);

  header = new BehaviorSubject<any>([]);
  rawHeaderMenus = new BehaviorSubject<any>([]);
  sortedHeaderMenus = new BehaviorSubject<any>([]);

  selectedMenu;

  levelOne = new BehaviorSubject<any>([]);
  levelTwo = new BehaviorSubject<any>([]);

  levelOnePrevious = new BehaviorSubject<any>([]);
  levelTwoPrevious = new BehaviorSubject<any>([]);

  levelOneActive: number;
  levelTwoActive: number;
  levelTwoHover: number;
  levelThreeActive: number;

  levelOneActivePrevious: number;
  levelTwoActivePrevious: number;
  levelThreeActivePrevious: number;

  constructor(
    private http: HttpClient
  ) {
    this.uid = localStorage.getItem('e_number');
  }

  getMenus(key: any) {
    return this.http.get(APIs.getMenus + '/' + key + '/' + this.uid);
  }

  getPortals() {
    return this.http.get(APIs.getPortals + '/' + this.uid);
  }

  getLandingSubMenus(pageName: string) {
    return this.http.get(APIs.getLandingSubMenus + '/' + pageName)
  }

  getSubMenus(pageName: string) {
    return this.http.get(APIs.getSubMenus + '/' + pageName)
  }

  getLandingSubMenusFn(pageName: string) {
    this.getLandingSubMenus(pageName)
      .subscribe((resp: any) => {
        this.pageMenus.next(resp);
      });
  }

  // ======================= Mongo Cache

  createMenuCache(e_number, link, levelOne, levelTwo, levelThree) {
    const body = {
      e_number: e_number,
      link: link,
      levelOne: levelOne,
      levelTwo: levelTwo,
      levelThree: levelThree,
    }
    return this.http.post(APIs.creatMenusCache, body);
  }

  // ======================= Header Menus

  // 2) Sort raw menus.
  sortedMenus() {
    this.rawHeaderMenus.subscribe((result: any) => {

      const levelOne = result.filter((menu) => {
        return menu.level === 1;
      });
      const levelTWO = result.filter((menu) => {
        return menu.level === 2;
      });
      const levelThree = result.filter((menu) => {
        return menu.level === 3;
      });

      levelOne.filter((firstLevel) => {
        firstLevel.subMenu = [];
        levelTWO.filter((secondLevel) => {
          secondLevel.subMenu = [];
          if (firstLevel.id === secondLevel.parent_id) {
            firstLevel.subMenu.push(secondLevel);
          } else {
            levelThree.filter((thirdLevel) => {
              thirdLevel.subMenu = [];
              if (secondLevel.id === thirdLevel.parent_id) {
                secondLevel.subMenu.push(thirdLevel);
              }
            });
          }
        });
      });

      this.header.next(levelOne);
      this.sortedHeaderMenus.next(levelOne);
    });
    // this.getBreadCrum();
  }

  // 3) Get selected menu (Current Page).
  getSelectedMenu(url: string) {
    this.rawHeaderMenus.subscribe((menus: any) => {
      if (menus.length > 0) {
        menus.filter((menu: any) => {

          // if level one menu is equal to current loaded page
          if (url === menu.component_name) {
            this.selectedMenu = menu;
          }
        });
      }
    });
  }

  // 4) Create parent and set sub menus using sorted menus and selected menus (Current Loaded Page)
  getMenusByPage(url: string) {
    this.breadCrumbHead = undefined;
    this.breadCrumbSecond = undefined;
    this.breadCrumbThird = undefined;

    this.getSelectedMenu(url);

    this.sortedHeaderMenus.subscribe(menu => {
      menu.filter(menus => {
        if (this.selectedMenu && this.selectedMenu.level === 1 && menus.id === this.selectedMenu.id) {

          this.landingPageHeading = menus.page_menu_title;

          this.levelOne.next(menus.subMenu);
          this.levelOnePrevious.next(menus.subMenu);

          this.levelOneActive = menus.id;
          this.levelTwoActive = undefined;
          this.levelThreeActive = undefined;

          this.levelTwo.next([]);
          this.levelTwoPrevious.next([]);

          this.levelOneActivePrevious = menus.id;
          this.levelTwoActivePrevious = undefined;
          this.levelThreeActivePrevious = undefined;

          this.pageMenus.next(menus.subMenu);
        }
        if (this.selectedMenu && this.selectedMenu.level === 2) {

          menus.subMenu.filter(levelOne => {
            if (levelOne.id === this.selectedMenu.id) {

              // setting breadcrumbs
              this.breadCrumbHead = menus.menu_title;
              this.breadCrumbSecond = levelOne.menu_title;
              this.breadCrumbThird = undefined;
              this.landingPageHeading = levelOne.page_menu_title;

              // setting parent menus (Level one menus)
              if (menus.id === levelOne.parent_id) {
                this.levelOne.next(menus.subMenu);
                this.levelOnePrevious.next(menus.subMenu);
                this.levelOneActive = menus.id;
                this.levelOneActivePrevious = menus.id;
              }

              this.levelTwo.next(levelOne.subMenu);
              this.levelTwoPrevious.next(levelOne.subMenu);

              this.levelTwoActive = levelOne.id;
              this.levelThreeActive = undefined;

              this.levelTwoActivePrevious = levelOne.id;
              this.levelThreeActivePrevious = undefined;

              this.pageMenus.next(levelOne.subMenu);

            }
          });
        }
        if (this.selectedMenu && this.selectedMenu.level === 3) {
          // Setting Level 3 -> level 2 -> level 1 menus if page reloaded

          // Get Level 2 Submenus
          if (menus.subMenu) {
            menus.subMenu.filter((level2: any) => {
              if (level2.subMenu.length) {

                // Set Level 2 Submenus
                if (level2.id === this.selectedMenu.parent_id) {

                  // setting breadcrumbs
                  this.breadCrumbHead = menus.menu_title;
                  this.breadCrumbSecond = level2.menu_title;
                  this.breadCrumbThird = this.selectedMenu.menu_title;
                  this.landingPageHeading = this.selectedMenu.page_menu_title;

                  this.levelTwo.next(level2.subMenu);
                  this.levelTwoPrevious.next(level2.subMenu);

                  this.levelThreeActive = this.selectedMenu.id;
                  this.levelThreeActivePrevious = this.selectedMenu.id;

                  // Set Level 1 Submenus
                  if (menus.id === level2.parent_id) {

                    this.levelOne.next(menus.subMenu);
                    this.levelOnePrevious.next(menus.subMenu);

                    this.levelTwoActive = level2.id;
                    this.levelTwoActivePrevious = level2.id;

                    this.levelOneActive = menus.id;
                    this.levelOneActivePrevious = menus.id;
                  }
                }
                return;
              }
            });
          }
        }
      })
    });

  }

  menuHoverSelection(menuID: Number, level: number) {
    if (level === 1) {
      this.header.subscribe((menus: any) => {
        if (menus.length > 0) {
          for (const menu of menus) {
            if (menu.id == menuID) {

              this.levelOne.next([]);
              this.levelOneActive = null;

              this.levelOne.next(menu.subMenu);
              this.levelOneActive = menu.id;

              this.levelTwo.next([]);
              this.levelTwoHover = null;
              // this.levelTwoActive = undefined;
            }
          }
        }
      });
    } else if (level === 2) {
      this.levelOne.subscribe(levelOneMenus => {

        if (levelOneMenus.length > 0) {
          for (const oneMenu of levelOneMenus) {
            if (oneMenu.id == menuID) {

              this.levelTwo.next([]);
              this.levelTwo.next(oneMenu.subMenu);

              if (oneMenu.subMenu.length > 0) {
                this.levelTwoHover = oneMenu.id;
              } else {
                this.levelTwoHover = null;
              }

            }
          }
        }
      })
    }
  }

  getBreadCrum() {
    this.breadCrumbHead = undefined;
    this.breadCrumbSecond = undefined;
    this.breadCrumbThird = undefined;

    let head;
    let second;
    let third;

    this.header.subscribe(menus => {
      if (this.levelOneActive && menus.length > 0) {
        head = menus.filter(map => map.id == this.levelOneActive);
        if (head.length > 0) {
          this.landingPageHeading = head[0].page_menu_title;
        }
      }
    });

    this.levelOne.subscribe(subMenu => {
      if (this.levelTwoActive && subMenu.length > 0) {
        second = subMenu.filter(map => map.id == this.levelTwoActive);
        if (second.length > 0) {

          this.breadCrumbHead = head[0].menu_title;
          this.breadCrumbSecond = second[0].menu_title;
          this.breadCrumbThird = undefined;

          this.landingPageHeading = this.breadCrumbSecond;
        }
      }
    });

    this.levelTwo.subscribe(secondSubmenu => {
      if (this.levelThreeActive && secondSubmenu.length > 0) {
        third = secondSubmenu.filter(map => map.id == this.levelThreeActive);
        if (third.length > 0) {

          this.breadCrumbHead = head[0].menu_title;
          this.breadCrumbSecond = second[0].menu_title;
          this.breadCrumbThird = third[0].menu_title;

          this.landingPageHeading = this.breadCrumbThird;
        }
      }
    });
  }

}

// ================== Steps for dynamic menus
// 1) Get raw menus from MySQL.
// 2) Sort raw menus.
// 3) Get selected menu (Current Page).
// 4) Create parent and set sub menus using sorted menus and selected menus (Current Loaded Page)
