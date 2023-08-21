import { Box, Grid, Paper } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';

const code = `[16:58:03] [1/INFO] [tML]: Starting tModLoader v0.11.8.9 Windows client (2022/5/10)
[16:58:03] [1/INFO] [tML]: Running on NetFramework 4.8
[16:58:03] [1/INFO] [tML]: Launch Parameters: 
[16:58:03] [1/DEBUG] [tML]: Assembly Resolve:  -> MonoMod.RuntimeDetour, Version=20.11.16.1, Culture=neutral, PublicKeyToken=null
[16:58:03] [1/DEBUG] [tML]: Assembly Resolve: MonoMod.RuntimeDetour, Version=20.11.16.1, Culture=neutral, PublicKeyToken=null -> MonoMod.Utils, Version=20.11.16.1, Culture=neutral, PublicKeyToken=null
[16:58:03] [1/DEBUG] [tML]: Assembly Resolve: MonoMod.RuntimeDetour, Version=20.11.16.1, Culture=neutral, PublicKeyToken=null -> Mono.Cecil, Version=0.11.3.0, Culture=neutral, PublicKeyToken=50cebf1cceb9d05e
[16:58:03] [1/DEBUG] [tML]: Assembly Resolve:  -> Ionic.Zip.Reduced, Version=1.9.1.8, Culture=neutral, PublicKeyToken=edbe51ad942a3f5c
[16:58:03] [1/DEBUG] [tML]: Assembly Resolve:  -> Newtonsoft.Json, Version=10.0.0.0, Culture=neutral, PublicKeyToken=30ad4fe6b2a6aeed
[16:58:04] [1/DEBUG] [tML]: Assembly Resolve:  -> Steamworks.NET, Version=9.1.0.0, Culture=neutral, PublicKeyToken=null
[16:58:23] [19/INFO] [tML]: 查找模组...
[16:58:23] [19/INFO] [tML]: 增容中: !Localizer
[16:58:23] [19/INFO] [tML]: 增容中: AlchemistNPC
[16:58:23] [19/INFO] [tML]: 增容中: BossChecklist
[16:58:24] [19/INFO] [tML]: 增容中: MaxStackPlus
[16:58:24] [19/INFO] [tML]: 增容中: RecipeBrowser
[16:58:24] [19/INFO] [tML]: 初始化...
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Ninject_0, Version=3.3.4.0, Culture=neutral, PublicKeyToken=c7192dc5380945e7
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Squid_0, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_0Harmony_0, Version=1.2.0.1, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/INFO] [Localizer]: Loading config
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Ninject_0, Version=3.3.4.0, Culture=neutral, PublicKeyToken=c7192dc5380945e7
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Squid_0, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_0Harmony_0, Version=1.2.0.1, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/INFO] [Localizer]: Loading config
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Ninject_0, Version=3.3.4.0, Culture=neutral, PublicKeyToken=c7192dc5380945e7
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Squid_0, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_0Harmony_0, Version=1.2.0.1, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/INFO] [Localizer]: Loading config
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Ninject_0, Version=3.3.4.0, Culture=neutral, PublicKeyToken=c7192dc5380945e7
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Squid_0, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_0Harmony_0, Version=1.2.0.1, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/INFO] [Localizer]: Loading config
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Ninject_0, Version=3.3.4.0, Culture=neutral, PublicKeyToken=c7192dc5380945e7
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_Squid_0, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/DEBUG] [tML]: Assembly Resolve: Localizer, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null -> !Localizer_0Harmony_0, Version=1.2.0.1, Culture=neutral, PublicKeyToken=null
[16:58:24] [19/INFO] [Localizer]: Loading config
 `;

interface LogBodyProps {
  size?: string;
}

function LogBody(props: LogBodyProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <CodeMirror value={code} editable={false} height={props.size} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LogBody;
