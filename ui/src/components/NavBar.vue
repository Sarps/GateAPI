<template>
  <v-navigation-drawer stateless value="true" app clipped class="white flat" flat>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Emmanuel Sarpong</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-layout row>
        <v-flex mx-5 my-2>
            <v-btn round block large color="white">
                <v-icon left>add</v-icon>
                Add App
            </v-btn>
        </v-flex>
    </v-layout>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group prepend-icon="apps" value="true">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Apps</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-group sub-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>List</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>apps</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>

          <v-list-tile v-for="(crud, i) in cruds" :key="i">
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-tile v-for="(app, i) in apps" :key="i" sub-group>
          <v-list-tile-title v-text="app[0]"></v-list-tile-title>
          <v-list-tile-action>
            <v-icon v-text="app[1]"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="account_circle" value="true">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile v-for="(admin, i) in admins" :key="i" @click>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(crud, i) in cruds" :key="i" @click>
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    apps: [["Create", "add"]],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ]
  })
};
</script>